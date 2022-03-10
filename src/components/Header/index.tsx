import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss'
import { FiMenu } from 'react-icons/fi'

export function Header() {
  return (
    <>
      <nav className={styles.nav}>
        <i className={styles.menu}>
          <FiMenu />
        </i>
        <a className={styles.nav_logo}>
          <Image src="/logo1.png" alt="" width="80" height="80"></Image>
        </a>
        <ul className={styles.nav_menu}>
          <li>
            <Link href="/">
              <a>Início</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Serviços</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Trabalhos</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contatos</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
