import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Netflix Clone',
  description: 'This is a netflix clone by JMSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
