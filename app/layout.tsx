import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientProviders from "@/components/ClientProviders";
import FirebaseAuthProvider from "@/components/FirebaseAuthProvider";
import SubscriptionProvider from "@/components/SubscriptionProvider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Wi-Chat",
  description: "Application that help you talk in any language",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProviders>
      <html lang="en">
        <FirebaseAuthProvider>
          <SubscriptionProvider>
            <body className="flex flex-col min-h-screen">
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Header />
                {children}
                <Toaster />
              </ThemeProvider>
            </body>
          </SubscriptionProvider>
        </FirebaseAuthProvider>
      </html>
    </ClientProviders>
  );
}
