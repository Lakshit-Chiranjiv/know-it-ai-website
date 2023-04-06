import './globals.css'
import { Poppins } from '@next/font/google'
 
export const metadata = {
  title: 'Know It',
  description: 'Know It is a web app that generates a summary for any topic',
}

const poppins = Poppins({
  variable: '--display-poppins',
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}
