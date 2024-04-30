import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../Estilos/App.css';
import Carousel from './carousel.jsx';
import Reserva from './Reserva'; 
import Contacto from './contacto.jsx';
function App() {
  const [currentPage, setCurrentPage] = useState(''); // Estado para la página actual

  // Función para actualizar la página actual
  const handleNavLinkClick = (page) => {
    setCurrentPage(page);
  };

  // Función para renderizar la página actual
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'Reserva':
        return <Reserva />;
      case 'carousel':
        // Aquí puedes agregar la lógica para otras páginas si es necesario
        return <Carousel />;
        case 'contacto':
          // Aquí puedes agregar la lógica para otras páginas si es necesario
          return <Contacto />;
      default:
        return <div>Inicio</div>;
    }
  };

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Mi Sitio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link target="#" onClick={() => handleNavLinkClick('carousel')}>Inicio</Nav.Link>
            <Nav.Link href="#" onClick={() => handleNavLinkClick('Reserva')}>Reserva</Nav.Link>
            <Nav.Link href="#" onClick={() => handleNavLinkClick('contacto')}>contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="iframe-content">
        {renderCurrentPage()}
      </div>
    </div>
  );
}

export default App;

