import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Providers from "./components/utils/Providers";
import TopButton from "./components/utils/TopButton";
import Head from "./head";

const font = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased min-h-screen transition !bg-[#080809] text-neutral-50 aeonikFont",
        font.className
      )}
    >
      <head>
        <ColorSchemeScript />
        <Head />
      </head>
      <body className="h-full bg-[#080809] text-neutral-50">
        <Providers>
          <MantineProvider>
            {children}
            <TopButton />
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
