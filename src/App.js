import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from "./BaseColaboradores";
import { useState } from 'react';
import FormColaborador from "./components/FormColaborador";
import TablaColaborador from "./components/TablaColaborador";
import BuscadorColaborador from "./components/BuscadorColaborador";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
 //console.log(colaboradores)
  const guardarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    //console.log("guardarColaborador"); 
  }
  
  return (
    <>
      <BuscadorColaborador
        colaboradores={colaboradores}
      />
      <FormColaborador
        guardarColaborador= {guardarColaborador}
      />
      <TablaColaborador 
        colaboradores={colaboradores}
      />
     {/* <ul>
        {colaboradores.map((colaborador)=> (
           <li key={colaborador.id}>{colaborador.nombre} <button onClick={eliminarColaborador}>X </button> </li>
        ))}
      </ul> */}
    </>
  );
}
export default App;
