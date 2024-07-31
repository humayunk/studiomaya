import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import "./font.css";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Studio Maya Inc.",
  description: "Digital Product Studio by Humayun K.",
  openGraph: {
    title: "Studio Maya Inc.",
    description: "Digital Product Studio by Humayun K.",
    images: [
      {
        url: "/sm-share.png",
        width: 1200,
        height: 630,
        alt: "Studio Maya Inc.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Maya Inc.",
    description: "Digital Product Studio by Humayun K.",
    images: ["/sm-share.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:image" content="/sm-share.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/sm-share.png" />
      </head>
      <body className={`${inter.className} ${spaceMono.className}`}>{children}</body>
    </html>
  );
}
