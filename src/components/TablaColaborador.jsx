import React from "react";
import {Table} from 'react-bootstrap';


const TablaColaborador  = (props) => {
    return (
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Correo</th>
          
        </tr>
      </thead> 
      <tbody>
          {props.colaboradores.map((colaborador) => ( 
              <tr key={colaborador.id}>
                  <td>{colaborador.id}</td>
                  <td>{colaborador.nombre}</td>
                  <td>{colaborador.correo}</td>
              </tr>
          ))}  
      </tbody>
    </Table>
 
);
}


export default TablaColaborador;