import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import ThemeToggle from "@/components/ThemeToggle";

// const inter = Inter({ subsets: ['latin'] })
const inter = Inter({
  subsets: ["latin"], // Include the Latin character subset
  // weight: "400",
  display: "swap", // Ensure text is visible while font loads
});

export const metadata: Metadata = {
  title: "Ethan Herring",
  description:
    "Software engineering manager building useful products and strong teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth", overflowX: "hidden" }}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeToggle />
        {children}
      </body>
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TAG ?? ""}
      />
    </html>
  );
}
