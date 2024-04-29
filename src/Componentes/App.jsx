//import React, { useRef, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server'; // Importa ReactDOMServer
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import '../estilos/App.css';
import logo from '../img/logo2.png';
import Carouselhome from './carousel';
import Contacto from './contacto';


const App = () => {
  const iframeContent = ReactDOMServer.renderToStaticMarkup(<Carouselhome iframe />);
  return (
    <>
      <Navbar bg="dark" >
        <Container >
          <Navbar.Brand>
            <img
              src={logo} // Ruta de tu logo
              height="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Nav class='nave'>
            <Nav.Link href="#LOGIN">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container fluid>
        <Row>
          <Col sm={2}>
            <Nav defaultActiveKey="/home" className="flex-column" style={{height:'500px'}}>
              <Nav.Link href="/home">Inicio</Nav.Link>
              <Nav.Link eventKey="link-1">Vuelos</Nav.Link>
              <Nav.Link eventKey="link-2">Reservas</Nav.Link>
              <Nav.Link eventKey="link-3">Contacto</Nav.Link>
            </Nav>
          </Col>
          <Col sm={10}>
            <div >
              <iframe style={{ width: '100%', height: '500px' }}
                title="iframe"
                width="100%"
                height="500px"
                frameBorder="0"
                srcDoc={`<!DOCTYPE html><html><head><style>* { box-sizing: border-box;} body { margin: 0; }</style></head><body>${iframeContent}</body></html>`}
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
      <footer style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>&copy; 2024 SkyWing | Diseñado por <a href="#">G05_SkyWing</a></p>
      </footer>
    </>
  );
}

export default App;
