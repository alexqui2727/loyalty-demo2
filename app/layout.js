export const metadata = {
  title: 'Pisti',
  description: 'Loyalty platform'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
