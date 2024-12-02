import { NextApiRequest, NextApiResponse } from "next";
import db from "@/config/db.config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const SECRET_KEY = process.env.JWT_SECRET;
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Check if the user already exists
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: "Email is already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await db.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      SECRET_KEY as string
    );

    // Respond with the created user (excluding the password)
    return res.status(201).json({
      message: "User Created Successfully",
      token,
      user: {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  } finally {
    await db.$disconnect();
  }
}
