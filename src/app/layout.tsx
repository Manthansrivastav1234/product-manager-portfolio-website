import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manthan Srivastav | Portfolio",
  description:
    "Functioning as a Technical Product Manager with strong ownership across growth, engagement, monetization, AI workflows, and product execution.",
  keywords: [
    "Manthan Srivastav",
    "Technical Product Manager",
    "OTT",
    "Monetization",
    "Growth",
    "AI Workflows",
    "Product Execution"
  ],
  openGraph: {
    title: "Manthan Srivastav | Portfolio",
    description:
      "Building scalable product experiences across growth, AI, and monetization.",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
