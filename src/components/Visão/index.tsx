import styles from './Visao.module.scss'
import { FaBullseye, FaEye } from 'react-icons/fa'
import { BiDiamond } from 'react-icons/bi'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function Visao() {
  return (
    <Container>
      <Row className="justify-content-md-center" id={styles.oi} md="auto">
        <Col xs lg="3">
          <Card style={{ width: '18rem' }}>
            <i className={styles.icon}>
              <FaBullseye />
            </i>

            <Card.Body>
              <Card.Title>Missão</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs lg="3" md="auto">
          <Card style={{ width: '18rem' }}>
            <i className={styles.icon}>
              <FaBullseye />
            </i>

            <Card.Body>
              <Card.Title>Missão</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs lg="3" md="auto">
          <Card style={{ width: '18rem' }}>
            <i className={styles.icon}>
              <FaBullseye />
            </i>

            <Card.Body>
              <Card.Title>Missão</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs lg="2" md="auto"></Col>
      </Row>
    </Container>
  )
}
