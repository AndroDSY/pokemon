// grundlegendes Layout der Seite + setzen von Metadaten, wie Titel oder Sprache

import type { Metadata } from 'next'
import '@/app/AndroDSY-grid.css'
import '@/app/globals.css'

export const metadata: Metadata = {
    title: 'Pokémon Helper'
    // viewport and charset are automatically set
}

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