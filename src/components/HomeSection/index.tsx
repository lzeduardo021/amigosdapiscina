import Image from 'next/image'
import styled from './HomeSection.module.scss'
import { FiMapPin,FiPhone  } from 'react-icons/fi'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { BsEnvelope } from 'react-icons/bs'

export default function HomeSection() {
  return (
    <>
      <div className={styled.home}>
        <div className={styled.card}>
          <h1 className={styled.title}>TUDO PARA <br />
          SUA PISCINA</h1>
          <p>O bem-estar de quem utiliza as piscinas que cuidamos é a nossa principal prioridade. Prestamos um serviço de alta qualidade e temos a expertise necessária para atender os clientes mais exigentes, seja na manutenção ou na resolução de problemas técnicos específicos. Portanto, confie no Amigos da Piscina JC. Somos especialistas em piscinas.</p>

          <p><i><FaWhatsapp /> (21) 99168-3818</i></p>

          <p><i><BsEnvelope /> amigosdapiscina@gmail.com</i></p>

          <i></i>
        </div>
      </div>
    </>
  )
}
