
import './styles/globals.css'
import { Poppins } from 'next/font/google'

const _Poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900']
 })

export const metadata = {
  title: 'Standalone-React NextJS',
  description: 'NextJS Standalone React made by. Vercel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel='icon' type='image/svg+xml' href='/react.png' />
      </head>
      <body className={_Poppins.className}>{children}</body>
    </html>
  )
}
