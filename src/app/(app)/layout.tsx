import '@app/styles/globals.scss'
import styles from '@app/styles/page.module.scss'
import { ReactNode } from 'react'
import { audiFontNormal } from '@app/constants/fonts'

// Root layout
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en-US' className={audiFontNormal.className}>
      <head />

      <body>
        <main className={styles.container}>{children}</main>
      </body>
    </html>
  )
}
