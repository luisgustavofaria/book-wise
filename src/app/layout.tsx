'use client'

import StyledComponentsRegistry from '@/lib/registry'
import { GlobalStyle } from '@/styles/global'
import { theme } from '@/styles/theme'
import { ThemeProvider } from 'styled-components'
import { Nunito_Sans } from 'next/font/google'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>Book Wise</title>
        <meta name="description" content="Create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <ThemeProvider theme={theme}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <body className={nunitoSans.className}>{children}</body>
        </StyledComponentsRegistry>
      </ThemeProvider>
    </html>
  )
}
