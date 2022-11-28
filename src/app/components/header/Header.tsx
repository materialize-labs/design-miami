'use client'

// Libs
import { FC, memo } from 'react'
import styles from './header.module.scss'
import Image from 'next/image'
// Image
import { LogoImg } from '@app/constants/images'

// Component
const Header: FC = () => {
  // Return
  return (
    <header className={styles.header}>
      <Image className={styles.header__logo} src={LogoImg} alt={'logo'} />
    </header>
  )
}

export default memo(Header)
