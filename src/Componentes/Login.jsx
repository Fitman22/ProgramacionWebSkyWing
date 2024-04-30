import React, { useState } from 'react';
import { Navbar, Nav, Modal, Button } from 'react-bootstrap';
import '../Estilos/App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    // Aquí deberías hacer la lógica para verificar el usuario y contraseña.
    // Por simplicidad, lo he omitido en este ejemplo.
    // Si el usuario y la contraseña son correctos, establece loggedIn en true.
    if (username === 'usuario' && password === 'contraseña') {
      setLoggedIn(true);
      setError('');
      setShowModal(false);
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  const handleLogout = () => {
    // Esta función se llama cuando el usuario hace clic en "Cerrar sesión".
    // Aquí puedes realizar cualquier limpieza necesaria y establecer loggedIn en false.
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Mi Sitio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Otra Página</Nav.Link>
          </Nav>
          {loggedIn ? (
            <Nav>
              <Nav.Link onClick={handleLogout}>Cerrar sesión</Nav.Link>
            </Nav>
          ) : (
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Iniciar Sesión
            </Button>
          )}
        </Navbar.Collapse>
      </Navbar>
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