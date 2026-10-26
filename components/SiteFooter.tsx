import Link from "next/link";

import { cvHref, cvLabel, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="proof border-t border-ink">
      <div className="container py-16">
        <p className="font-display text-section leading-none">{site.displayName}</p>
        <p className="mt-4 max-w-[34ch] text-md text-ink-2">
          {site.roleLine}. Based in {site.location}.
        </p>

        <nav aria-label="Footer" className="mt-10">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="link">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.linkedinUrl}
                className="link"
                rel="me noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <Link href="/work" className="link">
                Work
              </Link>
            </li>
            <li>
              <Link href="/about" className="link">
                About
              </Link>
            </li>
            <li>
              <a href={cvHref} className="link" download>
                {cvLabel}
              </a>
            </li>
          </ul>
        </nav>

        <p className="mt-12 border-t border-rule pt-6 text-xs text-muted">
          {site.fullName}, {site.location}. No cookies and no tracking on this site.
        </p>
      </div>
    </footer>
  );
}
