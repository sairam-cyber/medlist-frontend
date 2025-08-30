import './globals.css'

export const metadata = {
  title: 'Medlist - Book Your Doctor',
  description: 'Find the right doctor for your ailments',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}