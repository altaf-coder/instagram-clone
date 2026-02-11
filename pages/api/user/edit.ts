import getCurrentUser from "@/lib/getCurrentUser";
import uploadFile from "@/lib/uploader";
import prisma from "@/lib/prismadb";
import { NextApiRequest, NextApiResponse } from "next";
import { IncomingMessage } from "http";

async function parseJsonBody(req: IncomingMessage): Promise<Record<string, unknown>> {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const currentUser = await getCurrentUser(req, res);
  if (!currentUser) return res.status(401).json({ error: "Unauthorized" });

  let body: Record<string, unknown>;
  try {
    body = await parseJsonBody(req);
  } catch {
    return res.status(400).json({ error: "Invalid request body" });
  }

  const { userName, name, image, bio } = body as {
    userName?: string;
    name?: string;
    image?: string;
    bio?: string;
  };

  try {
    let uploadedImageUrl = null;

    if (image) {
      const uploadedImage = await uploadFile(image);
      uploadedImageUrl = uploadedImage?.[0]?.url || null;
    }

    const updateData: { userName?: string; name?: string; image?: string | null; bio?: string } = {};
    if (userName != null) updateData.userName = userName;
    if (name != null) updateData.name = name;
    if (uploadedImageUrl != null) updateData.image = uploadedImageUrl;
    if (bio != null) updateData.bio = bio;

    const updatedUser = await prisma.user.update({
      where: { id: currentUser.id },
      data: updateData,
    });

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ error: "Something went wrong in updating user" });
  }
}

export const config = {
  api: {
    bodyParser: false,
    sizeLimit: "5mb",
  },
};
