import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <>
      <nav className={styles.nav}>
      <a className={styles.nav_logo}>
        <Link href="/" passHref>
          <Image src="/vercel.svg" alt="logo" width={200} height={200} />
        </Link>
      </a>
        <ul className={styles.nav_menu}>
          <li>
            <Link href="/">
              <a>Início</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contato</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
