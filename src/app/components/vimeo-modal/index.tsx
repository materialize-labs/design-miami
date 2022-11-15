'use client'

import React, { useEffect } from 'react'
import ReactModal from 'react-modal'
import Vimeo from '@u-wave/react-vimeo'
import Player from '@vimeo/player'

import { LazyImage } from '@app/components'
import { CloseImg } from '@app/constants/images'

import styles from './styles.module.scss'

ReactModal.setAppElement('#modal-parent')

type Props = {
  open: boolean
  onClose: () => void
  vimeoVideoID?: string
}

const customStyles = {
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
  },
  content: {
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    padding: 0,
    outline: 'none',
    border: 'none',
    background: 'black',
    overflow: 'hidden',
  },
}

const VimeoModal = ({ open, onClose, vimeoVideoID }: Props) => {
  useEffect(() => {
    if (open) {
      document.body.classList.remove('scrollable')
    } else {
      document.body.classList.add('scrollable')
    }
  }, [open])

  const onEnd = () => {
    try {
      const iframe = document.querySelector('iframe')
      if (iframe) {
        const player = new Player(iframe)
        if (player) player.exitFullscreen()
      }
    } catch (e) {
      console.log(e)
    } finally {
      onClose()
    }
  }

  return (
    <ReactModal
      isOpen={open}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel='Modal'
      preventScroll
      ariaHideApp={false}
    >
      <button onClick={onClose} className={styles.closeButton}>
        <LazyImage src={CloseImg} alt={'close icon'} width={24} height={24} />
      </button>
      {!!vimeoVideoID && (
        <Vimeo
          video={vimeoVideoID || ''}
          autoplay
          onEnd={onEnd}
          loop={false}
          playsInline
          className={styles.vimeoVideo}
        />
      )}
    </ReactModal>
  )
}

export default VimeoModal
