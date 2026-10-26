import Link from "next/link";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { cvHref, cvLabel, site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="proof border-b border-rule">
      <div className="container flex h-[76px] items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-[1.75rem] leading-none tracking-display py-2"
        >
          {site.displayName}
        </Link>

        <div className="hidden items-center gap-10 sm:flex">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-8 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ButtonLink href={`mailto:${site.email}`}>Email me</ButtonLink>
        </div>

        <details className="relative sm:hidden">
          <summary className="btn btn--quiet cursor-pointer px-4">Menu</summary>
          <div className="menu-panel sheet absolute right-0 top-[calc(100%+8px)] w-64 p-5">
            <nav aria-label="Primary">
              <ul className="flex flex-col gap-1 text-md">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="link inline-flex min-h-11 items-center">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={cvHref}
                    className="link inline-flex min-h-11 items-center"
                    download
                  >
                    {cvLabel}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="link inline-flex min-h-11 items-center">
                    Email
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
