import { NextResponse, type NextRequest } from "next/server";

// Sends visitors who open "/" to their language: English if their browser
// prefers English, Portuguese otherwise.
export function proxy(request: NextRequest) {
  const accept = request.headers.get("accept-language") ?? "";
  const first = accept.split(",")[0]?.trim().toLowerCase() ?? "";
  const lang = first.startsWith("en") ? "en" : "pt";

  const url = request.nextUrl.clone();
  url.pathname = `/${lang}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/",
};
