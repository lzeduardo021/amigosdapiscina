import styles from './Footer.module.scss'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import ReactTooltip from 'react-tooltip'
import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <>
      <div className={styles.icon}>
        <ReactTooltip effect="solid" />
        <a href=""><Image src="/icon.jpeg" alt="" width="70" height="70" /> </a>
      </div>

      <div className={styles.footer}>
          <div className={styles.logo}>
            <Image
              src="/logo1.png"
              className="img-fluid"
              alt=""
              width="200"
              height="200"
            ></Image>
            <h3 className={styles.h3}>Excelência no Atendimento.</h3>
            <a className={styles.buttom}
              href="https://api.whatsapp.com/send?phone=5521991683818&text=Gostaria%20de%20fazer%20um%20orçamento.">
              Faça já seu orcamento.
            </a>
          </div>
        <div className={styles.descricao}>
          <p>© Todos os direitos reservados. {year}</p>
          <p>
            Desenvolvido por <a href="#">Luiz Consultoria TI</a>
          </p>
        </div>
      </div>
    </>
  )
}
