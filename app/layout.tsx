import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/Navbar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Bloggrz",
  description: "A simple CRUD application done in NextJS + Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="flex min-h-screen flex-col items-center">
          <div className="flex w-full flex-1 flex-col items-center">
            <Navbar />
            <div className="mt-10 flex flex-col gap-5">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
