import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import prisma from "./prismadb";

const getCurrentUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.email) return null;
  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email as string,
    },
  });
  if (!currentUser) return null;
  return currentUser;
};

export default getCurrentUser;
