import Image from 'next/image'
import styles from './HomeSection.module.scss'
import { FiMapPin, FiPhone } from 'react-icons/fi'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { BsEnvelope } from 'react-icons/bs'
import React from 'react'
import { Card } from 'react-bootstrap'

export default function HomeSection() {
  return (
    <>
      <div className={styles.home}>
        <Card className={styles.card}>
          <h1 className={styles.title}>
            Tudo para <br /> sua piscina
          </h1>
          <Card.Body>
            <Card.Text className={styles.p}>
            O bem-estar de quem utiliza as piscinas que cuidamos é a nossa principal prioridade. Prestamos um serviço de alta qualidade e temos a expertise necessária para atender os clientes mais exigentes, seja na manutenção ou na resolução de problemas técnicos específicos. Portanto, confie no Amigos da Piscina JC. Somos especialistas em piscinas.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>
    </>
  )
}
