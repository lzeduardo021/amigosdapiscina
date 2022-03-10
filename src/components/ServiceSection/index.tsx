import Image from 'next/image'
import styles from './Service.module.scss'

export default function ServiceSection() {
  return (
    <>
      <div className={styles.title}>
        <h1>Serviços</h1>

        <div className={styles.article}>
          <div className={styles.box}>
            <Image src="/img.jpg" alt="" width="350px" height="200px"></Image>
            <h1>Manutenção de Piscinas</h1>
            <p>Limpamos as paredes, fundo e superfície das piscinas de acordo com as especificações do Instituto Estadual do Ambiente (Rio De Janeiro).</p>
          </div>

          <div className={styles.box}>
            <Image src="/bomba.jpg" alt="" width="350px" height="200px"></Image>
            <h1>Assistência Técnica </h1>
            <p>Rachadura? penetração? Falha na bomba? Fale com a Marca D'Agua e obteremos uma solução completa e rápida.</p>
          </div>

          <div className={styles.box}>
            <Image src="/img.jpg" alt="" width="350px" height="200px"></Image>
            <h1>Manutenção de Piscinas</h1>
            <p>Limpamos as paredes, fundo e superfície das piscinas de acordo com as especificações do Instituto Estadual do Ambiente (Rio De Janeiro).</p>
          </div>
        </div>
      </div>
    </>
  )
}
