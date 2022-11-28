'use client'

// libs
import { FC, memo, useEffect, useState } from 'react'
import globals from '@app/styles/page.module.scss'
import styles from './more.module.scss'
import { LazyImage } from '@app/components'

// component
const More: FC<{ img: string }> = ({ img }) => {
  // modal
  const [modal, setModal] = useState<boolean>(false)
  // activate modal
  const handleActiveModal = () => setModal((value) => !value)
  // watch from modal
  useEffect(() => {
    const body = document.querySelector('html')

    if (body && modal) {
      body.style.overflow = 'hidden'
    } else if (body && !modal) {
      body.style.overflow = 'auto'
    }
  }, [modal])

  // return
  return (
    <>
      <div className={globals.container}>
        <div className={styles.wrapper}>
          <button className={styles.more} onClick={handleActiveModal}>
            More
          </button>
        </div>
      </div>

      <div
        className={`${styles.qrModal} ${modal ? styles.active : ''}`}
        onClick={handleActiveModal}
      >
        <LazyImage src={img} className={styles.qrModal__img} width={500} height={500} alt={'qr'} />
      </div>
    </>
  )
}

export default memo(More)
