import type { Metadata } from "next";
import Image from "next/image";

import { PageIntro } from "@/components/PageIntro";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { credentialGroups } from "@/content/credentials";
import { education } from "@/content/education";
import { publications } from "@/content/publications";
import { cvMailto, site } from "@/content/site";
import { story } from "@/content/story";

const certificateCount = credentialGroups.reduce(
  (total, group) => total + group.credentials.length,
  0,
);

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

      <section className="border-b border-rule">
        <div className="container py-20 md:py-24">
          <h2>Education</h2>

          <ul className="mt-10 grid gap-8 md:grid-cols-2">
            {education.map((entry) => (
              <li key={entry.award} className="sheet crop p-7 md:p-8">
                {entry.logo ? (
                  <Image
                    src={entry.logo}
                    alt=""
                    width={64}
                    height={64}
                    className="h-16 w-16 object-contain mix-blend-multiply"
                  />
                ) : null}
                <p className="mt-8 font-display text-lg leading-snug text-balance">
                  {entry.award}
                </p>
                <p className="mt-2 text-sm text-ink-2">{entry.institution}</p>
                {entry.years ? (
                  <p className="num mt-1 text-sm text-muted">{entry.years}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="credentials" className="border-b border-rule">
        <div className="container py-20 md:py-24">
          <div className="md:grid md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h2>Credentials</h2>
              <p className="mt-4 max-w-[36ch] text-sm text-ink-2">
                {certificateCount} certificates of completion, not auditor or
                lead-verifier qualifications. The IFC and IFRS Foundation courses
                sit closest to the work.
              </p>
            </div>

            <div className="mt-8 md:col-span-8 md:mt-0">
              <div className="ruled">
                {credentialGroups.map((group) => (
                  <details key={group.area}>
                    <summary className="flex cursor-pointer items-baseline justify-between gap-4 py-4 text-md">
                      <span>{group.area}</span>
                      <span className="num text-sm text-muted">
                        {group.credentials.length}
                      </span>
                    </summary>

                    <ul className="pb-4">
                      {group.credentials.map((credential) => (
                        <li
                          key={credential.title}
                          className="grid gap-1 py-2 md:grid-cols-12 md:gap-4"
                        >
                          <span className="text-sm md:col-span-8">
                            {credential.title}
                          </span>
                          <span className="text-sm text-ink-2 md:col-span-3">
                            {credential.issuer}
                          </span>
                          <span className="num text-sm text-muted md:col-span-1 md:text-right">
                            {credential.date ? credential.date.split(" ").pop() : ""}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
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
