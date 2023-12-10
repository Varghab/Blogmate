import { Inter } from 'next/font/google'
import '@styles/global.css'
import { connectToDatabase } from '@config/db.config'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blogmate',
  description: 'This is a blogging website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className='min-h-screen bg-[#0d1420] py-8'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
