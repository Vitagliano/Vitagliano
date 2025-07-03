import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Provider from "@/components/Provider";

export const metadata = {
  title: "Gabriel Russo Vitagliano",
  description:
    "I'm a Front-end Developer & UI/UX Designer that can quickly create high quality landing pages, blogs, directories and more using web technologies.",
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
