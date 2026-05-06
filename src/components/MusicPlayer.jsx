import { useState, useEffect, useRef } from 'react'
import styles from './MusicPlayer.module.css'

function NoteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 3L9 6v13a3 3 0 1 0 2 2.83V10.17l10-2.5V16a3 3 0 1 0 2 2.83V3h-2z"/>
    </svg>
  )
}

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    audioRef.current = new Audio('/invitacion-rena/music.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.4

    const startOnInteraction = () => {
      if (startedRef.current) return
      startedRef.current = true
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {})
      document.removeEventListener('click', startOnInteraction)
      document.removeEventListener('touchstart', startOnInteraction)
    }

    document.addEventListener('click', startOnInteraction)
    document.addEventListener('touchstart', startOnInteraction)

    return () => {
      audioRef.current.pause()
      document.removeEventListener('click', startOnInteraction)
      document.removeEventListener('touchstart', startOnInteraction)
    }
  }, [])

  const toggle = (e) => {
    e.stopPropagation()
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
    startedRef.current = true
  }

  return (
    <button
      className={`${styles.btn} ${playing ? styles.playing : ''}`}
      onClick={toggle}
      aria-label={playing ? 'Pausar música' : 'Reproducir música'}
    >
      <NoteIcon />
    </button>
  )
}
