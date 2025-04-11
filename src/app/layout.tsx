import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Lotus.com - Growth Systems That Actually Scale",
  description:
    "High-performance marketing team building elite growth systems for founders and teams who are ready to win.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.jpeg" />
      </head>
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}
