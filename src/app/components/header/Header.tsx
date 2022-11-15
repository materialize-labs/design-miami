'use client'

// Libs
import { FC, memo } from 'react'
import styles from './header.module.scss'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
// Image
import { LogoImg } from '@app/constants/images'

// Component
const Header: FC = () => {
  // Router
  const { push } = useRouter()
  const pathname = usePathname()
  // Go home
  const goHome = () => pathname !== '/' && push('/')

  // Return
  return (
    <header className={styles.header}>
      <Image
        onClick={goHome}
        src={LogoImg}
        alt={'logo'}
        width={100}
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
