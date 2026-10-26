import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { record } from "@/content/experience";
import { projects } from "@/content/projects";
import { cvMailto, site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: `${site.fullName} — ${site.roleLine}` },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="proof border-b border-rule md:flex md:min-h-[calc(100dvh-76px)] md:flex-col md:justify-center">
        <div className="container pb-12 pt-14">
          <div className="md:grid md:grid-cols-12 md:items-start md:gap-12">
            <div className="md:col-span-8">
              <h1 className="max-w-[18ch]">Climate change and energy analyst</h1>
              <p className="lead mt-6 text-ink-2">{site.stance}</p>

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <ButtonLink href={`mailto:${site.email}`} variant="primary">
                  Email me
                </ButtonLink>
                <a href={cvMailto} className="link text-sm">
                  CV on request
                </a>
                <Link href="/work" className="link text-sm">
                  The work
                </Link>
              </div>
            </div>

            <figure className="crop mt-12 w-full max-w-[300px] md:col-span-4 md:mt-2 md:justify-self-start md:pl-4">
              <Image
                src="/images/petlong-dakhling.jpg"
                alt="Portrait of Petlong Dakhling"
                width={400}
                height={400}
                priority
                sizes="(min-width: 768px) 340px, 80vw"
                className="h-auto w-full"
              />
            </figure>
          </div>

          <div className="mt-10 md:mt-12">
            <div className="guide">
              <span className="guide-readout">Selected record</span>
            </div>
            <ol className="sheet crop mt-7 divide-y divide-rule">
              {record.map((role) => (
                <li
                  key={`${role.org}-${role.period}`}
                  className="grid gap-2 px-5 py-3 md:grid-cols-12 md:items-baseline md:px-6"
                >
                  <div className="md:col-span-8">
                    <p className="record-title font-display text-title leading-tight">
                      {role.title}
                    </p>
                    <p className="mt-1 text-sm text-ink-2">{role.org}</p>
                  </div>
                  <p className="num text-sm text-muted md:col-span-4 md:text-right">
                    {role.period}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="container py-20 md:py-24">
          <div className="md:grid md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h2>Selected work</h2>
            </div>
            <div className="mt-10 md:col-span-8 md:mt-0">
              <ul className="ruled">
                {projects.slice(0, 3).map((project) => (
                  <li
                    key={project.slug}
                    className="grid gap-2 py-6 md:grid-cols-12 md:items-baseline"
                  >
                    <div className="md:col-span-8">
                      <p className="font-display text-title leading-tight">
                        {project.title}
                      </p>
                      <p className="mt-2 text-sm text-ink-2">{project.org}</p>
                    </div>
                    <p className="num text-sm text-muted md:col-span-4 md:text-right">
                      {project.period}
                    </p>
                  </li>
                ))}
              </ul>
              <Link href="/work" className="link mt-8 inline-block text-sm">
                All five projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="container py-20 md:py-24">
          <p className="max-w-[44rem] font-display text-section">
            Trained in ESG disclosure, climate adaptation, disaster risk and gender
            inclusion, through IFC, the IFRS Foundation, UNITAR and UNSSC.
          </p>
          <Link href="/about" className="link mt-8 inline-block text-sm">
            The full list of credentials
          </Link>
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="container py-16 md:grid md:grid-cols-12 md:gap-8 md:py-20">
          <h2 className="md:col-span-7">Hiring for a climate, energy or ESG role?</h2>
          <div className="mt-6 md:col-span-5 md:mt-0">
            <p className="text-md text-ink-2">
              I am open to roles across Africa and internationally, including remote
              and relocation.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <ButtonLink href={`mailto:${site.email}`} variant="primary">
                Email me
              </ButtonLink>
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
