import styles from './Divider.module.css'

/**
 * GlowDivider  — ornament with a glow sweep from right to left
 * ShootingStarDivider — a straight shooting star from left to right
 */

export function GlowDivider({ ornament = '✦' }) {
  return (
    <div className={styles.divider} aria-hidden="true">
      <span className={styles.line} />
      <span className={styles.ornament}>{ornament}</span>
      <span className={styles.line} />
    </div>
  )
}

export function ShootingStarDivider({ ornament = '✦', size = '0.85rem', gap = '0px' }) {
  return (
    <div className={styles.shootingDivider} aria-hidden="true">
      <span className={styles.starShot}>
        <span className={styles.starTail} />
        <span className={styles.starGap} style={{ width: gap }} />
        <span className={styles.starHead} style={{ fontSize: size }}>{ornament}</span>
      </span>
    </div>
  )
}
