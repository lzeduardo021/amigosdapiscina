import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import React from 'react'
import Image from 'next/image'

export function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image src="/logo1.png" width="80" height="80" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Serviços</Nav.Link>
              <Nav.Link href="#link">Trabalhos</Nav.Link>
              <Nav.Link href="#link">Contatos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
