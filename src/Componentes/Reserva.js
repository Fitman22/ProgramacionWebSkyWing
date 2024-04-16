import React, { useState } from 'react';
import '../Estilos/Reserva.css';
function Reservas() {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para enviar los datos de la reserva
    console.log("Origen:", origen);
    console.log("Destino:", destino);
    console.log("Fecha:", fecha);
  };

  return (
    <div>
      <h2>Reserva de vuelos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Origen:</label>
          <input
            type="text"
            value={origen}
            onChange={(e) => setOrigen(e.target.value)}
          />
        </div>
        <div>
          <label>Destino:</label>
          <input
            type="text"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          />
        </div>
        <div>
          <label>Fecha:</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <button type="submit">Reservar</button>
      </form>
    </div>
  );
}

export default Reservas;