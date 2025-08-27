import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "@/lib/prismadb";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method !== "POST"){
        return res.status(405).json({message: "method_not_allowed"});
    }

    try {
        const session = await getServerSession(req, res, authOptions);
        if(!session){
            return res.status(401).json({message: "unauthorized"});
        }

        const { query } = req.body;
        if (!query  || typeof query !== 'string') {
            return res.status(400).json({ message: "Missing search query" });
        }

        const users = await prisma.user.findMany({
            where:{
                OR:[
                    {name: {contains: query, mode: "insensitive"}},
                    {userName: {contains: query, mode: "insensitive"}}
                ],
            },
            select:{
                id: true,
                email: true,
                userName: true,
                image: true
            }
        })  

        return res.status(200).json(users);

    } catch (error) {
        return res.status(500).json({ message: "internal_server_error" });
    }
}