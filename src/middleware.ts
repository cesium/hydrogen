import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import {
  locales,
  defaultLocale,
  shortLocale,
  shortLocales,
} from "./lib/locale";
import type { Locale } from "./internationalization/dictionaries";

export function middleware(request: NextRequest): NextResponse {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale =
    shortLocales().some(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    ) ||
    locales.some(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirect if there is no locale
  const languages = new Negotiator({
    headers: {
      "accept-language":
        request.headers.get("Accept-Language") ?? defaultLocale,
    },
  }).languages();
  const locale: Locale = match(languages, locales, defaultLocale) as Locale;
  request.nextUrl.pathname = `/${shortLocale(locale)}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|static|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
