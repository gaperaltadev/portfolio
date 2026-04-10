import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gabriel Amarilla — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px",
          backgroundColor: "#09090b",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "2px",
              backgroundColor: "#c4b5a0",
            }}
          />
          <span
            style={{
              fontSize: "16px",
              letterSpacing: "0.2em",
              color: "#a1a1aa",
              textTransform: "uppercase",
            }}
          >
            Asunción, Paraguay
          </span>
        </div>
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#fafafa",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Gabriel Amarilla
        </h1>
        <p
          style={{
            fontSize: "32px",
            color: "#a1a1aa",
            marginTop: "12px",
            fontWeight: 300,
          }}
        >
          Full-Stack Developer
        </p>
        <p
          style={{
            fontSize: "20px",
            color: "#a1a1aa",
            opacity: 0.6,
            marginTop: "24px",
          }}
        >
          gaperalta.dev
        </p>
      </div>
    ),
    { ...size }
  );
}
