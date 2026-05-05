import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    status: "accepted_mock",
    message: "CSV import endpoint is scaffolded. Connect parser and Prisma transaction in database phase."
  });
}
