import getCurrentUser from "@/lib/getCurrentUser";
import uploadFile from "@/lib/uploader";
import prisma from "@/lib/prismadb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const currentUser = await getCurrentUser(req, res);
  if (!currentUser) return res.status(401).json({ error: "Unauthorized" });

  const { userName, name, image, bio } = req.body;

  try {
    let uploadedImageUrl = null;

    if (image) {
      const uploadedImage = await uploadFile(image);
      uploadedImageUrl = uploadedImage?.[0]?.url || null;
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        userName,
        name,
        image: uploadedImageUrl,
        bio,
      },
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
