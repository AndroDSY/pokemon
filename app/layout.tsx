import '@/app/AndroDSY-grid.css'
import '@/app/globals.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="de">
        <body>{children}</body>
      </html>
    )
  }