import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PointerSense — Select text. Get answers.",
  description:
    "PointerSense turns selected text into instant AI explanations on macOS. No copy-paste, no context switching — just select and understand.",
  openGraph: {
    title: "PointerSense",
    description: "Select text anywhere on your Mac. Get an instant AI explanation.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
