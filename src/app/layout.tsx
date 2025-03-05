import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata: Metadata = {
  title: "Brenno's Portfolio",
  description: "Modern and Minimalist fullstack Portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <StairTransition/>
          <PageTransition>
            {children}
          </PageTransition>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
