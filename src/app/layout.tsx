import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Provider from "@/components/Provider";

export const metadata = {
  title: "Gabriel Russo Vitagliano - Front-end Developer & UI/UX Designer",
  description:
    "Front-end developer and UI/UX designer with 10 years of experience creating clean, user-friendly websites and web applications. Based in São Paulo, Brazil. Passionate about web3 and building seamless experiences that connect traditional and decentralized platforms.",
  keywords: [
    "front-end developer",
    "UI/UX designer",
    "web development",
    "web3",
    "React",
    "Next.js",
    "TypeScript",
    "São Paulo",
    "Brazil"
  ],
  authors: [{ name: "Gabriel Russo Vitagliano" }],
  creator: "Gabriel Russo Vitagliano",
  publisher: "Gabriel Russo Vitagliano",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vitagliano.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gabriel Russo Vitagliano - Front-end Developer & UI/UX Designer",
    description: "Front-end developer and UI/UX designer with 10 years of experience creating clean, user-friendly websites and web applications. Based in São Paulo, Brazil. Passionate about web3 and building seamless experiences that connect traditional and decentralized platforms.",
    url: "https://vitagliano.com",
    siteName: "Gabriel Russo Vitagliano",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/img/me.jpeg",
        width: 1200,
        height: 630,
        alt: "Gabriel Russo Vitagliano - Front-end Developer & UI/UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Russo Vitagliano - Front-end Developer & UI/UX Designer",
    description: "Front-end developer and UI/UX designer with 10 years of experience creating clean, user-friendly websites and web applications. Based in São Paulo, Brazil. Passionate about web3 and building seamless experiences that connect traditional and decentralized platforms.",
    creator: "@gabrielrvita",
    images: ["/img/me.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "theme-color": "#3B82F6",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}</Provider>
      </body>
    </html>
  );
}
