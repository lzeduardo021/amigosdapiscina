import Image from 'next/image'
import styles from './Portpholio.module.scss'

export default function Portpholio() {
  return (
    <>
      <div className={styles.title}>
        <h1>Portfólio</h1>
      </div>
      <h3 className={styles.h3}>ANTES</h3>

      <div className={styles.article}>
        <div className={styles.box}>
        <Image src="/fundoserv.jpg" className="img-fluid" alt="" width="200" height="200"></Image>
          {/* <Image src="/fundoserv.jpg" alt="" width="200" height="200"></Image>
          <Image src="/fundoserv.jpg" alt="" width="200" height="200"></Image>
          <Image src="/fundoserv.jpg" alt="" width="200" height="200"></Image>
          <Image src="/fundoserv.jpg" alt="" width="200" height="200"></Image>
          <Image src="/fundoserv.jpg" alt="" width="200" height="200"></Image><Image src="/fundoserv.jpg" alt="" width="200" height="200"></Image><Image src="/fundoserv.jpg" alt="" width="200" height="200"></Image> */}
        </div>
      </div>
    </>
  )
}
