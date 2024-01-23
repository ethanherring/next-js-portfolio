import type { Metadata } from 'next'
import { Inter, Barlow } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })
const barlow = Barlow({
  subsets: ['latin'], // Include the Latin character subset
  weight: "400",
  display: 'swap', // Ensure text is visible while font loads
});

export const metadata: Metadata = {
  title: 'Ethan Herring',
  description: 'ethanherring.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth', overflowX: 'hidden' }}>
      <body className={barlow.className}>{children}</body>
    </html>
  )
}
