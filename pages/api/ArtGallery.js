import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();
export default async function handler(
    req,
    res
) {

    if (req.method == "GET") {
        let artList = [];
        if (req.query?.search)
            artList = await prisma.artGallery.findMany({
                orderBy: [
                    {
                        id: 'desc',
                    },
                ],
                where: {
                    artName: {
                        search: req.query?.search,
                    },
                    artistName: {
                        search: req.query?.search,
                    },
                    location: {
                        search: req.query?.search,
                    },
                },
            });
        else
            artList = await prisma.artGallery.findMany();
        return res.send(artList);
    }
}