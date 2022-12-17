import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, wish }: { name: string; wish: string } = req.body;
  console.log({ name, wish });
  if (req.method !== "POST") {
    return res.status(405).json({ message: "method not allowed" });
  }
  if (!name || !wish) {
    res.status(400).json({ message: "name or wish cannot be emty" });
  }

  const postData = await prisma.wishes.create({
    data: {
      name,
      wish,
      updatedAt: new Date(),
    },
  });
  console.log(postData);

  res.status(200).json({ message: "success insert data" });
}
