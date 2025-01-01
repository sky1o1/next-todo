import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const res = await prisma.todo.create({
      data: {
        title: body.title,
        details: body.details,
        authorId: body.authorId,
      },
      select: {
        title: true,
        details: true,
        createdAt: true,
        updatedAt: true,
        authorId: true,
      },
    });
    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
