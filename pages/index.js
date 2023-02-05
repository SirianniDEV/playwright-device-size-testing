import Link from 'next/link'
import styles from  '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.container} id="colouring">
      <nav>
        <Link href="/about">About</Link>
      </nav>
    </main>
  )
}