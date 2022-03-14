import styles from './Service.module.scss'
import { Card, CardGroup } from 'react-bootstrap'

export default function ServiceSection() {
  return (
    <>
      <div className={styles.title}>
        <h1 className={styles.subtitle}>Serviços</h1>
        <CardGroup>
          <Card className={styles.box}>
            <Card.Img variant="top" src="hidraulica.jpg" height="230px" />
            <Card.Body>
              <Card.Title>Parte Hidráulica/Elétrica</Card.Title>
              <Card.Text>
                Manutenção preventiva e saneamento de vazamentos e reparos em
                instalações hidráulicas e elétricas para casa de bombas de
                piscinas.
              </Card.Text>
            </Card.Body>
            <Card.Footer className={styles.buttom}>
              <small className={styles.small}>
                <a href="">Faça já seu orçamento.</a>
              </small>
            </Card.Footer>
          </Card>
          <Card className={styles.box}>
            <Card.Img variant="top" src="instalacao.jpg" height="230px" />
            <Card.Body>
              <Card.Title>Instalação de Piscina</Card.Title>
              <Card.Text>
                Amigos da Piscina foca no bem estar dos clientes instalando com maior segurança, com ótima equipe de trabalho.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer className={styles.buttom}>
              <small className={styles.small}>
                <a href="">Faça já seu orçamento.</a>
              </small>
            </Card.Footer>
          </Card>
          <Card className={styles.box}>
            <Card.Img variant="top" src="deck.jpg" height="230px" />
            <Card.Body>
              <Card.Title>Decks</Card.Title>
              <Card.Text>
                Amigos da Piscina JC tem experiência no mercado de reforma de
                deck. Realizamos serviços de aplicação de resinas, lixamento,
                troca de ripas e instalação completa.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer className={styles.buttom}>
              <small className={styles.small}>
                <a href="">Faça já seu orçamento.</a>
              </small>
            </Card.Footer>
          </Card>

          <Card className={styles.box}>
            <Card.Img variant="top" src="d3.jpeg" height="230px" />
            <Card.Body>
              <Card.Title>Manutenção de Piscina</Card.Title>
              <Card.Text>
              Limpamos as paredes, fundo e superfície das piscinas de acordo com as especificações do Instituto Estadual do Ambiente (Rio De Janeiro).
              </Card.Text>
            </Card.Body>
            <Card.Footer className={styles.buttom}>
              <small className={styles.small}>
                <a href="">Faça já seu orçamento.</a>
              </small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </>
  )
}
