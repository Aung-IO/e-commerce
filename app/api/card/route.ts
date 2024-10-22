import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { projectName, githubUrl, projectUrl, userId } = await request.json();

    if (!projectName || !githubUrl || !projectUrl || !userId) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
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
    console.error('Error creating card:', error);
    return NextResponse.json({ error: 'Failed to create card' }, { status: 500 });
  }
}

