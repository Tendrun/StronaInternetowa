import { Inter } from 'next/font/google'
import NavBar from 'app/NavBar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'online store website',
  description: 'online store website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
                   
      <NavBar />
      <main>{children}</main>      
      </body>
    </html>
  )
}
