import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Not found" };

export default function NotFound() {
  return (
    <section className="proof">
      <div className="container flex min-h-[60vh] flex-col justify-center py-24">
        <p className="text-sm text-muted">404</p>
        <h1 className="mt-4">This page isn&rsquo;t here</h1>
        <p className="lead mt-6 text-ink-2">
          The address may have changed, or it was never a page.
        </p>
        <div className="mt-8">
          <Link href="/" className="btn btn--primary">
            Back to the start
          </Link>
        </div>
      </div>
    </section>
  );
}
