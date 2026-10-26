import type { SiteProfile } from "@/lib/types";

export const site: SiteProfile = {
  displayName: "Petlong",
  fullName: "Petlong Dakhling",
  roleLine:
    "Climate change and energy analyst working on ESG, climate risk and gender equality",
  stance: "I turn climate risk into plans institutions can act on.",
  location: "Abuja, Nigeria",
  email: "markpetlong@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/petlong-dakhling",
  cvPath: "/cv/Petlong-Dakhling-CV.pdf",
  cvAvailable: true,
  siteUrl: "https://petlongdakhling.site",
  nav: [
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
  ],
};

export const cvMailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "CV request",
)}`;

export const cvHref = site.cvAvailable ? site.cvPath : cvMailto;
export const cvLabel = site.cvAvailable ? "Download CV" : "CV on request";
