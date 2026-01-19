import { v2 as cloudinary, UploadApiOptions } from "cloudinary";
import { Readable } from "stream";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME!,
  api_key: process.env.CLOUDINARY_KEY!,
  api_secret: process.env.CLOUDINARY_SECRET!,
});

// Detect from base64 string
const isVideo = (dataUrl: string): boolean => {
  return dataUrl.startsWith("data:video/");
};

// Convert buffer to stream for Cloudinary upload
const bufferToStream = (buffer: Buffer): Readable => {
  const readable = new Readable();
  readable.push(buffer);
  readable.push(null);
  return readable;
};

// Overload signatures for better type checking
async function uploadFile(media: string): Promise<{ url: string; type: string }[]>;
async function uploadFile(media: string[]): Promise<{ url: string; type: string }[]>;
async function uploadFile(media: Buffer, filename: string, resourceType: "image" | "video"): Promise<{ url: string; type: string }[]>;
async function uploadFile(media: string | string[] | Buffer, filename?: string, resourceType?: "image" | "video"): Promise<{ url: string; type: string }[]> {
  // Handle file buffer upload (for videos)
  if (Buffer.isBuffer(media)) {
    const stream = bufferToStream(media);
    
    const options: UploadApiOptions = {
      resource_type: resourceType || "auto",
      public_id: filename ? filename.split('.')[0] : undefined,
      use_filename: true,
      unique_filename: true,
      overwrite: false,
    };

    return new Promise<{ url: string; type: string }[]>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        options,
        (error, result) => {
          if (error) {
            reject(error);
          } else if (result) {
            resolve([{
              url: result.secure_url,
              type: result.resource_type === "video" ? "video" : "image",
            }]);
          } else {
            reject(new Error("Upload failed"));
          }
        }
      );

      stream.pipe(uploadStream);
    });
  }

  // Handle base64 string upload (for images)
  const upload = async (fileDataUrl: string): Promise<{ url: string; type: string }> => {
    const isVid = isVideo(fileDataUrl);

    const options: UploadApiOptions = {
      use_filename: true,
      unique_filename: true,
      overwrite: false,
      resource_type: isVid ? "video" : "image",
    };

    const result = await cloudinary.uploader.upload(fileDataUrl, options);
    return {
      url: result.secure_url,
      type: isVid ? "video" : "image",
    };
  };

  if (Array.isArray(media)) {
    const uploads = await Promise.all(media.map(upload));
    return uploads;
  } else {
    // Type guard to ensure it's a string
    if (typeof media !== 'string') {
      throw new Error('Expected string for base64 upload');
    }
    const result = await upload(media);
    return [result];
  }
}

export default uploadFile;