type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "quiet";
  className?: string;
  download?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "quiet",
  className = "",
  download = false,
}: ButtonLinkProps) {
  const classes = ["btn", variant === "primary" ? "btn--primary" : "btn--quiet", className]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={href} className={classes} {...(download ? { download: true } : {})}>
      {children}
    </a>
  );
}
