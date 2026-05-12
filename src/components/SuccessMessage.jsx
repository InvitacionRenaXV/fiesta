import { useEffect, useState } from 'react'
import styles from './SuccessMessage.module.css'

export default function SuccessMessage() {
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const isTeens = params.has('teens')
    const success = params.has('success')

    if (success) {
      setMessage('success')
    }

    if (success) {
      const timer = setTimeout(() => {
        const newUrl = isTeens
          ? `${window.location.pathname}?teens`
          : window.location.pathname
        window.history.replaceState({}, document.title, newUrl)
        setMessage(null)
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    const params = new URLSearchParams(window.location.search)
    const isTeens = params.has('teens')
    const newUrl = isTeens
      ? `${window.location.pathname}?teens`
      : window.location.pathname
    window.history.replaceState({}, document.title, newUrl)
    setMessage(null)
  }

  if (!message) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.toast}>
        <div className={styles.icon}>✓</div>
        <div className={styles.content}>
          <h3 className={styles.title}>¡Gracias!</h3>
          <p className={styles.text}>
            Tu respuesta fue recibida correctamente.
          </p>
        </div>
        <button className={styles.closeBtn} onClick={handleClose}>✕</button>
      </div>
    </div>
  )
}
