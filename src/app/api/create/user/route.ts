import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const res = await prisma.user.create({
      data: {
        age: body.age,
        name: body.name,
        email: body.email,
        role: body.role,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
