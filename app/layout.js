import './globals.css'

export const metadata = {
  title: 'Know It',
  description: 'Provides Brief Information About Various Topics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
