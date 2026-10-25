import { readFileSync } from "node:fs";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { site } from "@/content/site";
import { brand } from "@/lib/brand";

const logo = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/brand/logo.png"),
).toString("base64")}`;

export const alt = `${site.fullName}, ${site.roleLine}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: brand.paper,
          color: brand.ink,
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={logo} width={72} height={72} alt="" />
          <div style={{ display: "flex", fontSize: 30, letterSpacing: "-0.01em" }}>
            {site.displayName}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 76, lineHeight: 1.05, letterSpacing: "-0.022em" }}>
            Climate change and energy analyst
          </div>
          <div style={{ display: "flex", fontSize: 32, color: brand.ink2 }}>
            ESG, climate risk and gender equality. {site.location}.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `2px solid ${brand.rule}`,
            paddingTop: 24,
            fontSize: 26,
            color: brand.muted,
          }}
        >
          <div style={{ display: "flex" }}>{site.fullName}</div>
          <div style={{ display: "flex" }}>petlongdakhling.site</div>
        </div>
      </div>
    ),
    size,
  );
}
