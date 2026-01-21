import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";
import bcrypt from "bcrypt";

// Enable bodyParser for this route to parse JSON
export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const { name, userName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (existingUser)
      return res.status(422).json({ error: "User already exists" });

    const user = await prisma.user.create({
      data: {
        name: name,
        userName: userName,
        email: email,
        hashedPassword: hashedPassword,
      },
    });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "Something went wrong in Registeration" });
  }
}
