import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm, File as FormidableFile } from "formidable";
import { writeFile, mkdir } from "fs/promises";
import { existsSync, readFileSync } from "fs";
import path from "path";
import getCurrentUser from "@/lib/getCurrentUser";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const currentUser = await getCurrentUser(req, res);
    if (!currentUser) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const form = new IncomingForm({
      keepExtensions: true,
      maxFileSize: 100 * 1024 * 1024, // 100MB
    });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({ error: "Error parsing form data" });
      }

      const file = Array.isArray(files.file) ? files.file[0] : files.file;
      if (!file) {
        return res.status(400).json({ error: "No file provided" });
      }

      const formidableFile = file as FormidableFile;

      // Create uploads directory if it doesn't exist
      const uploadDir = path.join(process.cwd(), "public", "uploads", "messages");
      if (!existsSync(uploadDir)) {
        await mkdir(uploadDir, { recursive: true });
      }

      // Generate unique filename
      const timestamp = Date.now();
      const randomString = Math.random().toString(36).substring(2, 15);
      const ext = path.extname(formidableFile.originalFilename || "");
      const filename = `${timestamp}-${randomString}${ext}`;
      const filepath = path.join(uploadDir, filename);

      // Save file
      const fileBuffer = readFileSync(formidableFile.filepath);
      await writeFile(filepath, fileBuffer);

      // Return file URL
      const fileUrl = `/uploads/messages/${filename}`;
      
      return res.status(200).json({
        url: fileUrl,
        filename: formidableFile.originalFilename,
        size: formidableFile.size,
        mimetype: formidableFile.mimetype,
      });
    });
  } catch (error: any) {
    console.error("Error uploading file:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
