// Libs
import { FC, memo } from 'react'
import styles from './pagePreloader.module.scss'

// Interface
interface IPreloader {
  position?: 'fixed' | 'absolute'
}

// Component
const PagePreloader: FC<IPreloader> = ({ position = 'fixed' }) => (
  <div className={`${styles.pagePreloader} ${position === 'absolute' && styles.absolute}`}>
    <div className={styles.pagePreloader__loader} />
  </div>
)

export default memo(PagePreloader)
