'use client'

import React, { useState } from 'react'
import { IData } from '@pages/api/home'
import { LazyImage, VimeoModal } from '@app/components'
import { useIsMobile } from '@app/helpers/hooks'

import styles from './styles.module.scss'

type Props = {
  items: IData['items']
}

const VideoItems = (props: Props) => {
  const { items } = props

  const isMobile = useIsMobile()
  const [selectedVimeoID, setSelectedVimeoID] = useState<string>()

  // Return
  return (
    <div className={styles.items}>
      {items.map(({ title, vimeoVideoID, image }, key) => (
        <div
          key={`item--${key}`}
          className={!vimeoVideoID ? `${styles.item} ${styles.inactive}` : styles.item}
          onClick={() => vimeoVideoID && setSelectedVimeoID(vimeoVideoID)}
        >
          <div className={styles.item__image}>
            <LazyImage
              src={image}
              alt={'image'}
              width={isMobile ? 128 : 256}
              height={isMobile ? 77 : 144}
            />
            {!vimeoVideoID && <div className={styles.item__fpo}>FPO</div>}
          </div>
          <p className={styles.item__title}>{title}</p>
        </div>
      ))}
      <VimeoModal
        open={!!selectedVimeoID}
        onClose={() => setSelectedVimeoID(undefined)}
        vimeoVideoID={selectedVimeoID}
      />
    </div>
  )
}

export default VideoItems
