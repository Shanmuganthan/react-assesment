import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();
export default async function handler(
    req,
    res
) {
    if (req.method == "GET") {
        let artList = [];
        if (req.query?.ids) {
            let ids = req.query?.ids?.split(",")?.map(Number)
            artList = await prisma.artGallery.findMany({
                orderBy: [
                    {
                        id: 'desc',
                    },
                ],
                where: {
                    id: {
                        in: ids,
                    },

                },
            });
        }
        else
            artList = await prisma.artGallery.findMany();
        return res.send(artList);
    }
}