import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await prisma.todo.findMany();
    return NextResponse.json({ data: res, status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
