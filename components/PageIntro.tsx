type PageIntroProps = {
  title: string;
  lead?: string;
};

export function PageIntro({ title, lead }: PageIntroProps) {
  return (
    <header className="max-w-[46rem]">
      <h1>{title}</h1>
      {lead ? <p className="lead mt-6 text-ink-2">{lead}</p> : null}
    </header>
  );
}
