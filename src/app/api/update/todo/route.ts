import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  const data = await req.json();
  try {
    const res = await prisma.todo.update({
      where: {
        id: data.id,
      },
      data: {
        title: data.title,
        details: data.details,
      },
      select: {
        id: true,
        title: true,
        details: true,
        updatedAt: true,
      },
    });
    return NextResponse.json({ data: res, status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
