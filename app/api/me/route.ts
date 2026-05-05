import { NextResponse } from "next/server";
import { currentSession } from "@/lib/api";

export async function GET() {
  const session = await currentSession();
  return NextResponse.json({
    authenticated: Boolean(session),
    user: session ? { phone: session.phone } : null
  });
}
