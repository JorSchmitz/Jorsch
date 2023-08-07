import Navbar from '@/components/Navbar'
import './globals.css'
import { Rubik, Roboto_Mono } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' })

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

export const metadata = {
  title: 'Jorsch - Dev',
  description: 'Jorsch personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${robotoMono.variable}`}>
        <Navbar>{children}</Navbar>
      </body>
    </html>
  )
}
