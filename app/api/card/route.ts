import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { projectName, githubUrl, projectUrl, userId } = await request.json();

    if (!projectName || !githubUrl || !projectUrl || !userId) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const card = await prisma.card.create({
      data: {
        projectName,
        githubUrl,
        projectUrl,
        userId,
      },
    });

    return NextResponse.json(card, { status: 201 });
  } catch (error) {
    console.error("Error creating card:", error);
    return NextResponse.json(
      { error: "Failed to create card" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const { cardId } = await request.json();

  if (!cardId) {
    return NextResponse.json(
      { message: "Card ID is required" },
      { status: 400 }
    );
  }

  try {
    await prisma.card.delete({
      where: {
        cardId,
      },
    });
    return NextResponse.json({ status: 201 });
  } catch (error) {
    console.error("Failed to delete card:", error);
    return NextResponse.json(
      { error: "Failed to create card" },
      { status: 500 }
    );
  }
}
