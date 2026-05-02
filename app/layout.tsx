import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VPN Block Bypasser — Find Working VPN Protocols in Restricted Countries',
  description: 'Crowdsourced database of VPN protocols and servers that work in restricted countries. Real-time status and community-driven reliability scores.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b5576c4c-9969-4fe9-8e7b-553555a89645"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
