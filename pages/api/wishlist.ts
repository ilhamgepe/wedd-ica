import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import prisma from "../../prisma/prisma";
export default async function wishes(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "method not allowed" });
  }

  const response = await prisma.wishes.findMany({
    orderBy: { updatedAt: "desc" },
  });

  if (!response) res.status(500).json({ message: "cant get wishlist" });

  return res.status(200).json([...response]);
}
