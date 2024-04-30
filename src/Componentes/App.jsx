import React, { useState } from 'react';
import { Navbar, Nav, Modal, Button } from 'react-bootstrap';
import '../Estilos/App.css';
import Carousel from './Carrusel.jsx';
import Contacto from './contacto.jsx';
import Reserva from './Reserva.jsx'; 
import Vuelos from './Vuelos.jsx';
function App() {
  const [currentPage, setCurrentPage] = useState('carousel');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleNavLinkClick = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = () => {
    if (username === 'usuario' && password === 'contraseña') {
      setLoggedIn(true);
      setError('');
      setShowModal(false);
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
    handleNavLinkClick('carousel')
  };

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#" onClick={() => handleNavLinkClick('carousel')}>SkyWing</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link id='nav' target="#" onClick={() => handleNavLinkClick('carousel')}>Inicio</Nav.Link>    
            <Nav.Link href="#" onClick={() => handleNavLinkClick('contacto')}>Contacto</Nav.Link>
            <Nav.Link href="#" onClick={() => handleNavLinkClick('Vuelos')}>Vuelos</Nav.Link>
            {loggedIn && <Nav.Link href="#" onClick={() => handleNavLinkClick('Reserva')}>Reserva</Nav.Link>}
            {!loggedIn&& <Nav.Link href="#" onClick={() => setShowModal(true)}>Login</Nav.Link>}
          </Nav>
          {loggedIn && <Button variant="outline-primary" onClick={handleLogout}>Cerrar sesión</Button>}
        </Navbar.Collapse>
      </Navbar>
      <div className="iframe-content" style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
        {currentPage === 'carousel' && <Carousel />}
        {currentPage === 'Reserva' && <Reserva />}
        {currentPage === 'contacto' && <Contacto />}
        {currentPage === 'Vuelos' && <Vuelos />}
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <div className="alert alert-danger">{error}</div>}
          <form>
            <div className="form-group">
              <label htmlFor="username">Usuario:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Iniciar Sesión
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
