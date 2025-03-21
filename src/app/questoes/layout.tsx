import type { Metadata } from 'next'
import '../globals.css'

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
      <div className='flex justify-center items-center'>{children}</div>
  )
}
