import '@radix-ui/themes/styles.css';
import { Inter } from 'next/font/google'
import NavBar from 'app/NavBar'
import { Theme } from '@radix-ui/themes';
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
        <Theme>           
        <NavBar />
        <main className='p-5'>{children}</main>
        </Theme>      
        </body>
    </html>
  )
}
