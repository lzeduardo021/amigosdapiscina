import Image from 'next/image'
import styles from './Portpholio.module.scss'

export default function Portpholio() {
  return (
    <>
      <div className={styles.title}>
        <h1>Portfólio</h1>
      </div>
      <h3 className={styles.h3}>ANTES/DEPOIS</h3>
      <div className={styles.box_image}>
        <Image
          src="/a1.jpeg"
          className="img-fluid"
          alt=""
          width="300"
          height="300"
        ></Image>
        <Image
          src="/a2.jpeg"
          className="img-fluid"
          alt=""
          width="300"
          height="300"
        ></Image>
        <Image
          src="/a3.jpeg"
          className="img-fluid"
          alt=""
          width="300"
          height="300"
        ></Image>
        <Image
          src="/a4.jpeg"
          className="img-fluid"
          alt=""
          width="300"
          height="300"
        ></Image>
        <Image
          src="/a5.jpeg"
          className="img-fluid"
          alt=""
          width="300"
          height="300"
        ></Image>
         <Image
          src="/a6.jpeg"
          className="img-fluid"
          alt=""
          width="300"
          height="300"
        ></Image>
        <Image
          src="/a7.jpeg"
          className="img-fluid"
          alt=""
          width="300"
          height="300"
        ></Image>
        
      </div>

      <div className={styles.box_image}>
        <Image
          src="/d1.jpeg"
          className="img-fluid"
          alt=""
          width="300"
          height="300"
        ></Image>
        <Image
          src="/d2.jpeg"
          className="img-fluid"
          alt=""
          width="300"
          height="300"
        ></Image>
        <Image
          src="/d3.jpeg"
          className="img-fluid"
          alt=""
          width="300"
          height="300"
        ></Image>
        <Image
          src="/d4.jpeg"
          className="img-fluid"
          alt=""
          width="300"
          height="300"
        ></Image>
        <Image
          src="/d5.jpeg"
          className="img-fluid"
          alt=""
          width="300"
          height="300"
        ></Image>
        <Image
          src="/d6.jpeg"
          className="img-fluid"
          alt=""
          width="300"
          height="300"
        ></Image>
        <Image
          src="/d7.jpeg"
          className="img-fluid"
          alt=""
          width="300"
          height="300"
        ></Image>

      </div>
    </>
  )
}
