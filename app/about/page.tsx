import type { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { credentialGroups } from "@/content/credentials";
import { publications } from "@/content/publications";
import { cvMailto, site } from "@/content/site";
import { story } from "@/content/story";

export const metadata: Metadata = {
  title: "About",
  description:
    "Petlong Dakhling is a climate change and energy analyst in Abuja, Nigeria: emergency response planning, IFC-aligned ESMS, climate risk, and credentials in ESG disclosure, adaptation and gender inclusion.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-rule">
        <div className="container pb-16 pt-16">
          <PageIntro title="About" lead={story.opening} />

          <div className="mt-14 max-w-[62ch] space-y-6 text-md text-ink-2">
            {story.practice.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <p>{story.education}</p>
          </div>
        </div>
      </section>

      <section id="credentials" className="border-b border-rule">
        <div className="container py-20 md:py-24">
          <div className="md:grid md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h2>Credentials</h2>
              <p className="mt-4 max-w-[34ch] text-sm text-ink-2">
                Certificates of completion, not auditor or lead-verifier
                qualifications. The IFC and IFRS Foundation courses are the ones
                closest to the work.
              </p>
            </div>

            <div className="mt-10 space-y-12 md:col-span-8 md:mt-0">
              {credentialGroups.map((group) => (
                <div key={group.area}>
                  <h3 className="text-title leading-tight">{group.area}</h3>
                  <p className="mt-2 text-sm text-muted">{group.note}</p>
                  <ul className="ruled mt-5">
                    {group.credentials.map((credential) => (
                      <li
                        key={credential.title}
                        className="grid gap-1 py-3 md:grid-cols-12 md:gap-4"
                      >
                        <span className="text-md md:col-span-7">
                          {credential.title}
                        </span>
                        <span className="text-sm text-ink-2 md:col-span-3">
                          {credential.issuer}
                        </span>
                        <span className="num text-sm text-muted md:col-span-2 md:text-right">
                          {credential.date ?? ""}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
