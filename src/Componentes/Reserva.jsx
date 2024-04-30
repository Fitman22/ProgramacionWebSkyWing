import React, { useState } from 'react';
import '../Estilos/Reserva.css';

function Reservas() {
 
  const destinosPredefinidos = [
    { id: 1, nombre: 'Nueva York' },
    { id: 2, nombre: 'París' },
    { id: 3, nombre: 'Londres' },
    { id: 4, nombre: 'Tokio' },
    { id: 5, nombre: 'Roma' }
  ];

  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [fecha, setFecha] = useState('');
  const [pasajeros, setPasajeros] = useState(1); 
  const [clase, setClase] = useState('economica');
  const [extras, setExtras] = useState([]); 
  const [error, setError] = useState('Por favor complete todos los campos.');

  const handleExtrasChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setExtras([...extras, value]);
    } else {
      setExtras(extras.filter(extra => extra !== value));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!origen || !destino || !fecha || !pasajeros || !clase) {
      alert(error);
      return;
    }
    
    console.log("Origen:", origen);
    console.log("Destino:", destino);
    console.log("Fecha:", fecha);
    console.log("Pasajeros:", pasajeros);
    console.log("Clase:", clase);
    console.log("Extras:", extras);

    const message = `¡Reserva realizada con éxito!\n
      Origen: ${origen}\n
      Destino: ${destino}\n
      Fecha: ${fecha}\n
      Pasajeros: ${pasajeros}\n
      Clase: ${clase}\n
      Extras: ${extras.join(', ')}`;
    alert(message);

    setError('');
  };
  return (
     <div className="reserva-container">
      <h2>Reserva de vuelos</h2>
      <form className="reserva-form" onSubmit={handleSubmit}>
        <div>
          <label>Origen:</label>
          <select
            value={origen}
            onChange={(e) => setOrigen(e.target.value)}
          >
            <option value="">Seleccione Origen</option>
            {destinosPredefinidos.map(origen => (
              <option key={origen.id} value={origen.nombre}>{origen.nombre}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Destino:</label>
          <select
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          >
            <option value="">Seleccione destino</option>
            {destinosPredefinidos.map(destino => (
              <option key={destino.id} value={destino.nombre}>{destino.nombre}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Fecha:</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div>
          <label>Pasajeros:</label>
          <input
            type="number"
            value={pasajeros}
            onChange={(e) => setPasajeros(parseInt(e.target.value))}
            min="1"
            max="10"
          />
        </div>
        <div>
          <label>Clase:</label>
          <select
            value={clase}
            onChange={(e) => setClase(e.target.value)}
          >
            <option value="economica">Económica</option>
            <option value="ejecutiva">Ejecutiva</option>
            <option value="primera">Primera clase</option>
          </select>
        </div>
        <div>
          <label>Extras:</label>
          <div>
            <label>
              <input
                type="checkbox"
                value="equipaje"
                checked={extras.includes('equipaje')}
                onChange={handleExtrasChange}
              />
              Equipaje adicional
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="comida"
                checked={extras.includes('comida')}
                onChange={handleExtrasChange}
              />
              Comida a bordo
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="wifi"
                checked={extras.includes('wifi')}
                onChange={handleExtrasChange}
              />
              Wi-Fi a bordo
            </label>
          </div>
        </div>
        <button type="submit">Reservar</button>
      </form>
    </div>
  );
}

export default Reservas;

