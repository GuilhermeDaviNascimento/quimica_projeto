import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Química',
  description: '...',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className='m-0 flex justify-center items-center p-0 w-lvw h-lvh'>{children}</body>
    </html>
  )
}
