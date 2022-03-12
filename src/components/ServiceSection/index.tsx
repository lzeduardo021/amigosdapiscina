import Image from 'next/image'
import styles from './Service.module.scss'

export default function ServiceSection() {
  return (
    <>
      <div className={styles.title}>
        <h1 className={styles.subtitle}>Serviços</h1>

        <div className={styles.article}>
          <div className={styles.box}>
            <Image
              src="/instalacao.jpg"
              alt=""
              width="500px"
              height="250"
            ></Image>
            <h1>Instalação de Piscina</h1>
            <p>
              Limpamos as paredes, fundo e superfície das piscinas de acordo com
              as especificações do Instituto Estadual do Ambiente (Rio De
              Janeiro).
            </p>
            <div className={styles.buttom}>
              <a href="https://api.whatsapp.com/send?phone=5521991683818&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20instalação%20de%20piscinas.">
                Faça Seu Orçamento.
              </a>
            </div>
          </div>
          <div className={styles.box}>
            <Image src="/d3.jpeg" alt="" width="500px" height="250"></Image>
            <h1>Manutenção de Piscinas</h1>
            <p>
              Limpamos as paredes, fundo e superfície das piscinas de acordo com
              as especificações do Instituto Estadual do Ambiente (Rio De
              Janeiro).
            </p>
            <div className={styles.buttom}>
              <a href="https://api.whatsapp.com/send?phone=5521991683818&text=Gostaria%20de%20fazer%20uma%20manutenção%20em%20minha%20piscina.">
                Faça Seu Orçamento.
              </a>
            </div>
          </div>
          <div className={styles.box}>
            <Image
              src="/hidraulica.jpg"
              alt=""
              width="500px"
              height="250"
            ></Image>
            <h1>Parte Hidráulica</h1>
            <p>
              Manutenção preventiva e saneamento de vazamentos e reparos em
              instalações hidráulicas e elétricas para casa de bombas de
              piscinas.
            </p>
            <div className={styles.buttom}>
              <a
                href="https://api.whatsapp.com/send?phone=5521991683818&text=Gostaria%20de%20fazer%20manutenção%20na%20bomba%20hidráulica%20da%20minha%20piscina.">
                Faça Seu Orçamento.
              </a>
            </div>
          </div>

          <div className={styles.box}>
            <Image src="/deck.jpg" alt="" width="500px" height="250"></Image>
            <h1>Reforma de Deck </h1>
            <p>
              Amigos da Piscina JC tem experiência no mercado de reforma de
              deck. Realizamos serviços de aplicação de resinas, lixamento,
              troca de ripas e instalação completa.
            </p>
            <div className={styles.buttom}>
              <a href="https://api.whatsapp.com/send?phone=5521991683818&text=Gostaria%20de%20fazer%20uma%20reforma%20no%20deck%20da%20piscina.">
                Faça Seu Orçamento.
              </a>
            </div>
          </div>

          <div className={styles.box}>
            <Image
              src="/eletrica.jpg"
              alt=""
              width="500px"
              height="250"
            ></Image>
            <h1>Parte Elétrica</h1>
            <p>
              Nossos técnicos o atenderão em sua casa e ou empresa, com maior
              segurança e confiabilidade.
            </p>
            <div className={styles.buttom}>
              <a href="https://api.whatsapp.com/send?phone=5521991683818&text=Gostaria%20de%20fazer%20um%20orçamento.">
                Faça Seu Orçamento.
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
