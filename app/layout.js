import './globals.css'


// include the poppins font from google fonts in the head using metadata api
export const metadata = {
  title: 'Know It',
  description: 'Know It is a web app that generates a summary for any topic',
  font: {
    google: {
      families: ['Poppins']
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
