import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import LeftSideBar from "@/components/layout/LeftSideBar";
import TopBar from "@/components/layout/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexusMart - Admin Dashboard",
  description: "Admin dashboard to manage NexusMart data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <main className="flex max-lg:flex-col">
            <TopBar />
            <LeftSideBar />
            {children}           
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
