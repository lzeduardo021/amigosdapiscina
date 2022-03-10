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
          <p><i><FiMapPin /> Rua Visconde de Banda. 554 - São Gonçalo - Rj</i></p>

          <p><i><FiPhone /> (21) 99999-9999</i></p>

          <p><i><FaWhatsapp /> (21) 99999-9999</i></p>

          <p><i><BsEnvelope /> amigosdapiscina@gmail.com</i></p>

          <i></i>
        </div>
      </div>
    </>
  )
}
