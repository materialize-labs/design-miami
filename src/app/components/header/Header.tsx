'use client'

// Libs
import { FC, memo } from 'react'
import styles from './header.module.scss'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
// Image
import { LogoImg } from '@app/constants/images'
import { useIsMobile } from '@app/helpers/hooks'

// Component
const Header: FC = () => {
  // Router
  const { push } = useRouter()
  const pathname = usePathname()

  const isMobile = useIsMobile()

  // Go home
  const goHome = () => pathname !== '/' && push('/')

  // Return
  return (
    <header className={styles.header}>
      <Image
        onClick={goHome}
        src={LogoImg}
        alt={'logo'}
        width={isMobile ? 50 : 100}
        style={
          pathname !== '/'
            ? { pointerEvents: 'auto', cursor: 'pointer' }
            : { pointerEvents: 'none' }
        }
      />
    </header>
  )
}

export default memo(Header)
