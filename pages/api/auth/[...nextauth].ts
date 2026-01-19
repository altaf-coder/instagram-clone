import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from "@/lib/prismadb";

export const authOptions:AuthOptions={
    adapter:PrismaAdapter(prisma) as any,
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        AppleProvider({
            clientId: process.env.APPLE_CLIENT_ID!,
            clientSecret: process.env.APPLE_CLIENT_SECRET!
        }),
        CredentialsProvider({
            name: "Credentials",
            id: "credentials",
             credentials: {
        email: { label: "Email or Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
     async authorize(credentials) {
          if(!credentials?.email || !credentials?.password) {
              throw new Error("Please provide both an email and password");
          }
          const user = await prisma.user.findUnique({ 
              where: {
                     email: credentials.email,
              }
          });
          if (!user) {
              throw new Error("User not found");
          }
          const isValid = await bcrypt.compare(credentials.password, user.hashedPassword!);
          if (!isValid) {
              throw new Error("Invalid password");
          }
          return user;
      },
        })
    ],
    session:{
        strategy: "jwt"
    },
     callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.id = (user as any).id;
      }
      return token;
    },
    async session({ session, token }:any) {
     const userData :any= await prisma.user.findUnique({
       where: { id: token.sub || "" },
       select:{
        id: true,
        email: true,
        name: true,
        userName: true,
        image: true,
        followingIds: true,
        posts: true
       }
     });
     session.user = userData;
     return session;
    },
  },

  pages: {
    signIn: "/auth/login", 
  },

  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions);