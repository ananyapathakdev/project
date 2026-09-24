import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    const cookieStore = await cookies();

    const sessionId = cookieStore.get("sessionId")?.value;

    console.log("LOGOUT SESSION ID:", sessionId);

    if (sessionId) {
      await prisma.session.deleteMany({
        where: {
          id: sessionId,
        },
      });
    }

    cookieStore.delete("sessionId");

    return NextResponse.json(
      {
        message: "Logout successful",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("LOGOUT ERROR:", error);

    return NextResponse.json(
      {
        error: "Logout failed",
      },
      { status: 500 }
    );
  }
}