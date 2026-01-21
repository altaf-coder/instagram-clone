import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";
import bcrypt from "bcrypt";
import { IncomingMessage } from "http";

// Since bodyParser is disabled globally, we need to parse JSON manually
async function parseJsonBody(req: IncomingMessage): Promise<any> {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch (error) {
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
  // Only allow POST method
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  try {
    // Parse JSON body manually since bodyParser is disabled globally
    const body = await parseJsonBody(req);
    const { name, userName, email, password } = body;
    
    // Validate required fields
    if (!name || !userName || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
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
  } catch (error: any) {
    console.error("Registration error:", error);
    // Return more detailed error in development, generic in production
    const errorMessage = process.env.NODE_ENV === "development" 
      ? error.message || "Something went wrong in Registration"
      : "Something went wrong in Registration";
    return res
      .status(500)
      .json({ error: errorMessage });
  }
}
