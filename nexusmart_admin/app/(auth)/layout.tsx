import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import {  ClerkProvider} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexusMart - Admin Auth",
  description: "Admin dashboard to manage NexusMart data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <main>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
