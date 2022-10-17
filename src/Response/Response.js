import React, { useState, useReducer } from 'react';
import './Response.css';
import Card from 'react-bootstrap/Card';
import {HookLectura} from '../HookLectura/HookLectura';

export const Response = () => {
  const [id, setId] = useState(1);    

  const [usuario] = HookLectura(`https://jsonplaceholder.typicode.com/users/${id}`); //Consumo de ejemplo
  //Este es un servicio en línea para pruebas json, mientras se añade la codificación proveniente
  //de Java

  const manejarIdAnterior = () => {
      if (id > 1) setId(id - 1)
  }

  const manejarIdSiguiente = () => {
      setId(id + 1)
  }

  return (
      <div>
          <h1>{usuario.id}</h1>
          <h2>{usuario.name}</h2>
          <p>{usuario.username}</p>
          <button onClick={manejarIdAnterior}>Id Anterior</button>
          <p>{id}</p>
          <button onClick={manejarIdSiguiente}>Id SIguiente</button>
      </div>
  )
}

/*function Response() {
  return (
    <Card>
      <Card.Header>Response Area</Card.Header>
      <Card.Body>

      </Card.Body>
    </Card>
  );
}*/

/* ESTE ES EL DISEÑO FINAL PARA CUANDO SE TENGA EL SERVICIO DE JAVA FUNCIONANDO AL 100%*/

export default Response;

