import type { Metadata } from "next";
import Image from "next/image";

import { PageIntro } from "@/components/PageIntro";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { credentialGroups } from "@/content/credentials";
import { education } from "@/content/education";
import { publications } from "@/content/publications";
import { cvMailto, site } from "@/content/site";
import { story } from "@/content/story";

export const metadata: Metadata = {
  title: "About",
  description:
    "Petlong Dakhling is a climate change and energy analyst in Abuja, Nigeria: LLM International Law and BA International Relations from Near East University, IFC-aligned ESMS work, and credentials in ESG disclosure, adaptation and gender inclusion.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/about",
    siteName: site.fullName,
    title: `About · ${site.fullName}`,
    description:
      "Climate change and energy analyst in Abuja: LLM International Law and BA International Relations from Near East University, IFC-aligned ESMS work, and credentials in ESG disclosure, adaptation and gender inclusion.",
  },
  twitter: {
    card: "summary_large_image",
    title: `About · ${site.fullName}`,
    description:
      "Climate change and energy analyst in Abuja: LLM International Law and BA International Relations from Near East University, IFC-aligned ESMS work, and credentials in ESG disclosure, adaptation and gender inclusion.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-rule">
        <div className="container py-16 md:py-24">
          <PageIntro title="About" lead={story.opening} />

          <p className="mt-10 max-w-[62ch] text-md text-ink-2">{story.current}</p>
        </div>
      </section>

      <section id="credentials" className="border-b border-rule">
        <div className="container py-20 md:py-24">
          <div className="md:grid md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h2>Background</h2>
            </div>

            <div className="mt-10 space-y-12 md:col-span-8 md:mt-0">
              <div>
                <h3 className="text-title leading-tight">Education</h3>
                <ul className="ruled mt-5">
                  {education.map((entry) => (
                    <li key={entry.award} className="flex items-start gap-4 py-4">
                      {entry.logo ? (
                        <Image
                          src={entry.logo}
                          alt=""
                          width={48}
                          height={48}
                          className="mt-0.5 h-12 w-12 shrink-0 object-contain mix-blend-multiply"
                        />
                      ) : null}
                      <div className="min-w-0">
                        <p className="font-display text-lg leading-snug">
                          {entry.award}
                        </p>
                        <p className="mt-1 text-sm text-ink-2">
                          {entry.institution}
                        </p>
                        {entry.years ? (
                          <p className="num mt-1 text-sm text-muted">{entry.years}</p>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <details className="mt-10">
                <summary className="flex cursor-pointer items-baseline justify-between gap-4 border-t border-ink pt-4 text-sm text-ink-2">
                  <span>Certificates of completion</span>
                  <span className="num text-muted">
                    {credentialGroups.reduce(
                      (total, group) => total + group.credentials.length,
                      0,
                    )}
                  </span>
                </summary>
                <p className="mt-4 max-w-[58ch] text-sm text-muted">
                  Not auditor or lead-verifier qualifications. The IFC and IFRS
                  Foundation courses sit closest to the work.
                </p>
                <div className="mt-8 space-y-10">
              {credentialGroups.map((group) => (
                <div key={group.area}>
                  <h3 className="text-title leading-tight">{group.area}</h3>
                  <ul className="ruled mt-5">
                    {group.credentials.map((credential) => (
                      <li
                        key={credential.title}
                        className="grid gap-1 py-4 md:grid-cols-12 md:gap-4 md:py-7"
                      >
                        <span className="text-md md:col-span-7">
                          {credential.title}
                        </span>
                        <span className="text-sm text-ink-2 md:col-span-3">
                          {credential.issuer}
                        </span>
                        <span className="num text-sm text-muted md:col-span-2 md:text-right">
                          {credential.date ? credential.date.split(" ").pop() : ""}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="container py-20 md:py-24">
          <div className="md:grid md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h2>Writing</h2>
              <p className="mt-4 max-w-[34ch] text-sm text-ink-2">
                Columns for BellaNaija on climate change in Nigeria.
              </p>
            </div>
            <ul className="ruled mt-10 md:col-span-8 md:mt-0">
              {publications.map((publication) => (
                <li
                  key={publication.url}
                  className="grid gap-2 py-5 md:grid-cols-12 md:items-baseline md:gap-4"
                >
                  <div className="md:col-span-8">
                    <a
                      href={publication.url}
                      className="link text-title font-display leading-tight"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {publication.title}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </div>
                  <p className="text-sm text-ink-2 md:col-span-3">
                    {publication.outlet}
                  </p>
                  <p className="num text-sm text-muted md:col-span-1 md:text-right">
                    {publication.date}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="container py-16 md:grid md:grid-cols-12 md:gap-8 md:py-20">
          <h2 className="md:col-span-7">Where I am and what I am looking for</h2>
          <div className="mt-6 md:col-span-5 md:mt-0">
            <p className="text-md text-ink-2">{story.availability}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <ButtonLink href={`mailto:${site.email}`} variant="primary">
                Email me
              </ButtonLink>
              <a href={cvMailto} className="link text-sm">
                Ask for the CV
              </a>
              <a
                href={site.linkedinUrl}
                className="link text-sm"
                rel="me noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
