import type { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Five pieces of work: a state emergency response plan, IFC-aligned ESG and ESMS policy, climate emergency procedures, a sustainability club and a thousand articles on African energy.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-rule">
        <div className="container pb-20 pt-16">
          <PageIntro
            title="Work"
            lead="Five pieces of work, and the part I played in each. Outcomes are listed only where there is a verifiable one."
          />

          <div className="mt-16">
            {projects.map((project) => (
              <article
                key={project.slug}
                id={project.slug}
                className="border-t border-rule py-10 first:border-t-ink md:grid md:grid-cols-12 md:gap-8 md:py-12"
              >
                <header className="md:col-span-5">
                  <h2 className="text-title leading-tight">{project.title}</h2>
                  <dl className="mt-4 space-y-2 text-sm text-ink-2">
                    <div>
                      <dt className="text-muted">Organisation</dt>
                      <dd>{project.org}</dd>
                    </div>
                    <div>
                      <dt className="text-muted">Role</dt>
                      <dd>{project.role}</dd>
                    </div>
                    <div>
                      <dt className="text-muted">Period</dt>
                      <dd className="num">{project.period}</dd>
                    </div>
                  </dl>
                </header>

                <div className="mt-8 md:col-span-7 md:mt-0">
                  <p className="lead text-ink-2">{project.context}</p>
                  <h3 className="mt-8 text-sm font-medium text-muted">
                    What I produced
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-md">
                    {project.produced.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="container py-16 md:grid md:grid-cols-12 md:gap-8">
          <h2 className="md:col-span-7">Want the detail behind any of these?</h2>
          <div className="mt-6 md:col-span-5 md:mt-0">
            <p className="text-md text-ink-2">
              I can walk through the method, the documents and what changed as a
              result.
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
