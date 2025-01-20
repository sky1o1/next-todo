import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({
      error: "ID is required",
      status: 400,
    });
  }

  try {
    const res = await prisma.todo.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json(res, {
      statusText: "Sucessfully Deleted",
      status: 200,
    });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
