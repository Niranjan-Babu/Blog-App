import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './ui/navbar/navbar'
import Footer from './ui/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog.io',
  description: 'Simple Blog App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>

      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
