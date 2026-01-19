import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";
import getCurrentUser from "@/lib/getCurrentUser";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  const currentUser = await getCurrentUser(req, res);
  if (!currentUser?.email)
    return res.status(401).json({ error: "Unauthorized" });
  try {
    const users = await prisma.user.findMany({
      where: {
        NOT: {
          id: currentUser.id,
        },
      },
    });
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "Something went wrong in fetching users" });
  }
}
