import '@app/styles/globals.scss'
import styles from '@app/styles/page.module.scss'
import { ReactNode } from 'react'
import { audiFontNormal } from '@app/constants/fonts'
import { Header } from '@app/components'

// Root layout
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en-US' className={audiFontNormal.className}>
      <head />

      <body className={styles.container}>
        <Header />

        <main>{children}</main>
      </body>
    </html>
  )
}
