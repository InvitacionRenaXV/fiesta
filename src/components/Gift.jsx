import styles from './Gift.module.css'
import { GlowDivider } from './Divider'
import GiftIcon from '../assets/GiftIcon'

const TITULAR = 'Pablo Fernandez Mila'
const ACCOUNT = 7737060
const BANK = 'Colectivo Cuenta Itau'

export default function Gift() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <GiftIcon className={styles.icon} lidClass={styles.lid} aria-hidden="true" />
        <h2 className={styles.heading}>Regalo</h2>

        <GlowDivider />

        <p className={styles.text}>
          Tu presencia es el mejor regalo.<br />
          Si querés tener un detalle, podés hacerlo así:
        </p>

        <div className={styles.card}>
          <p className={styles.bank}>{BANK}</p>
          <div className={styles.row}>
            <span className={styles.field}>Titular</span>
            <span className={styles.value}>{TITULAR}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.field}>Cuenta</span>
            <span className={styles.value}>{ACCOUNT}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
