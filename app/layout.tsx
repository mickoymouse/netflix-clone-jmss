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
      <body className='bg-black'>
        <div className='min-h-[100vh] bg-zinc-800'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
