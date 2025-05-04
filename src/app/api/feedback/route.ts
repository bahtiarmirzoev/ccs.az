import { NextResponse } from "next/server";
import { feedbackSchema } from "@/lib/db/schema";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = feedbackSchema.parse(body);

    const feedback = await db.feedback.create({
      data: {
        ...validatedData,
        status: "PENDING",
      },
    });

    return NextResponse.json(feedback);
  } catch (error) {
    console.error("[FEEDBACK_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET() {
  try {
    const feedback = await db.feedback.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(feedback);
  } catch (error) {
    console.error("[FEEDBACK_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 