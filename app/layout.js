import './globals.css'

export const metadata = {
  title: 'Know It',
  description: 'Know It is a web app that generates a summary for any topic',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
