import styles from './DressCode.module.css'
import SuitIcon from '../assets/SuitIcon'
import DressIcon from '../assets/DressIcon'
import { GlowDivider } from './Divider'

const FORBIDDEN = ['Blanco', 'Plateado']

export default function DressCode() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Código de Vestimenta</p>
        <h2 className={styles.heading}>Vestimenta Formal</h2>

        <GlowDivider />

        <div className={styles.outfits}>
          {/* Saco / Traje */}
          <div className={styles.outfitItem}>
            <SuitIcon className={`${styles.outfitIcon} ${styles.suit}`} />
          </div>
          {/* Vestido */}
          <div className={styles.outfitItem}>
            <DressIcon className={`${styles.outfitIcon} ${styles.dress}`} />
          </div>
        </div>

        <div className={styles.forbidden}>
          <p className={styles.forbiddenLabel}>Por favor evitar:</p>
          <div className={styles.forbiddenPills}>
            {FORBIDDEN.map(c => (
              <span key={c} className={styles.pill}>
                <span className={styles.cross}>✕</span> {c}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
