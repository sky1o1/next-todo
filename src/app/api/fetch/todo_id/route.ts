import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "ID parameter is required" },
      { status: 400 }
    );
  }
  try {
    const res = await prisma.todo.findUnique({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ data: res, status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err, status: 500 });
  }
}
