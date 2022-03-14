import styles from './Visao.module.scss'
import { FaBullseye, FaEye } from 'react-icons/fa'
import { BiDiamond } from 'react-icons/bi'
import React from 'react'
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap'

export default function Visao() {
  return (
    <CardGroup className={styles.container}>
      <Card>
        <i className={styles.icon}>
          <FaBullseye />
        </i>
        <Card.Body>
          <Card.Title className={styles.title}> Missão</Card.Title>
          <Card.Text>
          Garantir a excelência dos serviços prestados, com um foco cada vez maior no cliente.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <i className={styles.icon}>
          <FaEye />
        </i>
        <Card.Body>
          <Card.Title className={styles.title}> Visão</Card.Title>
          <Card.Text>
          Ser uma das empresas líderes no setor de manutenção e proteção de piscinas no Brasil.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <i className={styles.icon}>
          <BiDiamond />
        </i>
        <Card.Body>
          <Card.Title className={styles.title}> Valores</Card.Title>
          <Card.Text>
          Prestar um serviço de excelência, melhoria contínua do desempenho, satisfação dos colaboradores e responsabilidade social e ambiental.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  )
}
