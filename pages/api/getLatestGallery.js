import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
    const data = req.body;
    try {


        artList = await prisma.artGallery.findMany({
            orderBy: [
                {
                    id: 'desc',
                },
            ],
            skip: 0,
            take: 3,
        });
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(403).json({ err: "Error occured while adding a new food." });
    }
};