import React from 'react';
import '../Estilos/App.css';
import logo from '../img/logo.png';
import Faceboock from '../img/facebook.png';
import Twitter from '../img/twitter.png';
import Linkedin from '../img/linkedin.png';
import Instagram from '../img/instagram.png';
import calendario from '../img/calendario.png';
import contacto from '../img/contacto.png';
import mascota from '../img/mascotas.png'

function App() {
  return (
    <div className="App">
      <header>
        {/* Encabezados */}
        <div className='redesSociales'>
          <a href="#"><img src={Faceboock} alt="" /></a>
          <a href="#"><img src={Twitter} alt="" /></a>
          <a href="#"><img src={Linkedin} alt="" /></a>
          <a href="#"><img src={Instagram} alt="" /></a>
        </div>
        <div  className="logo"><img src={logo} alt="no" /></div>
        {/* Menú de navegación horizontal */}
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Vuelos</a></li>
            <li><a href="#">Reservas</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </header>
      {/* Imagen con desplazamiento horizontal */}
      <div className="image">
        <h3>VIAJES REGIONALES</h3>
        <p>Ayudamos a las personas a ahorrar tiempo, mejorar su vida, ejerciendo la comunicación, tanto en los negocios como en la vida privada.</p>
      </div>
      {/* Contenido de 3 columnas por 2 filas */}
      <h1>Tips - Usuario</h1>
      <div class="grid-container">
        <div class="grid-item"><img src={calendario} alt="" /> <p>Puedes agendar tus vuelos llenando nuestros fomularios.</p></div>
        <div class="grid-item"><img src={contacto} alt="" /> <p>Nuestros asesores siempre estarán pendientes a tus solicitudes. </p></div>
        <div class="grid-item"><img src={mascota} alt="" /> <p>Recuerda siempre contar con la documentación de tus mascotas.</p></div>
      </div>
      {/* pie de pagina*/}
    <footer>
    <p>&copy; 2024 SkyWing | Diseñado por <a href="#">G05_SkyWing</a></p>
    </footer>
    </div>
  );
}

export default App;
