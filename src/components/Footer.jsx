import styles from './Footer.module.css'
import { GlowDivider } from './Divider'
import HeartHandsIcon from '../assets/HeartHandsIcon'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.flourish} aria-hidden="true">
          <HeartHandsIcon className={styles.heartHands} />
        </div>

        <h2 className={styles.name}>Rena</h2>

        <p className={styles.tagline}>¡Te espero!</p>

        <GlowDivider />

        <p className={styles.date}>05 · 09 · 2026</p>
        <p className={styles.location}>Los Zorzales, Ruta 8</p>

    
      </div>
    </footer>
  )
}
