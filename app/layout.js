import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
