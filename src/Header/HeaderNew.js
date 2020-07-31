import React from 'react'
import {
  Navbar,
  Nav,
  NavDropdown,
  NavbarBrand,
  Container,
} from 'react-bootstrap'

export default function HeaderNew() {
  return (
    <>
      <Navbar expand='lg' variant='light' bg='light'>
        <Container>
          <Navbar.Brand href='#'>Navbar</Navbar.Brand>
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
              Signed in as: <a href='#login'>Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
