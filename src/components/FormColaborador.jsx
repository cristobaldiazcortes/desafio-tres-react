import React from "react";
import { useState } from "react"
import { Form, Button } from "react-bootstrap";

const FormColaborador = (props) => {


  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [error, SetError] = useState(false);

  const capturarNombre = (e) => setNombre(e.target.value);
  const capturarCorreo = (e) => setCorreo(e.target.value);

  const guardarColaboradorForm = (e) => {
      e.preventDefault();

      if (nombre === ''  || correo === '' ) {
        SetError(true);
        return alert("debe rellenar todos los campos");
      } else { 
        SetError(false);
      }

      const colaborador = {
          id: Date.now(),
          nombre: nombre,
          correo: correo,
      }
      props.guardarColaborador(colaborador);

      setCorreo('');    
      setNombre('');    
           
  }

  return (
    <>
      <Form onSubmit={guardarColaboradorForm}>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
            value={nombre}
            onChange={capturarNombre} 
            type="text" 
            placeholder="Ingrese nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Dirección correo electrónico</Form.Label> 
          <Form.Control 
            value={correo} 
            onChange={capturarCorreo} 
            type="email"
            placeholder="Ingrese correo" />
          <Form.Text className="text-muted">
            nunca compartiremos su mail.
          </Form.Text> 
        </Form.Group>
        
        <Button variant="success" type="submit">
          Guardar
        </Button>
      </Form>
    </>
  );
};

export default FormColaborador;
