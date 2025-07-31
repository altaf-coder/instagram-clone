import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// Detect from base64 string
const isVideo = (dataUrl: string) => {
  return dataUrl.startsWith("data:video/");
};

const uploadFile = async (media: string | string[]) => {
  const upload = async (fileDataUrl: string) => {
    const isVid = isVideo(fileDataUrl);

    const options = {
      use_filename: true,
      unique_filename: true,
      overwrite: false,
      resource_type: isVid ? ("video" as const) : ("image" as const),
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
    const result = await upload(media);
    return [result];
  }
};

export default uploadFile;
