import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from "./BaseColaboradores";
import { useState } from "react";
import FormColaborador from "./components/FormColaborador";
import TablaColaborador from "./components/TablaColaborador";
import BuscadorColaborador from "./components/BuscadorColaborador";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [busqueda, setBusqueda] = useState([]);

  //Guardar nuevos colaboradores
  const guardarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  //El fitro de colaboradores
  const cargaData = (data) => {
    let busqueda = []; //-> Reseteamos la array cada vez que se ejecute
    setBusqueda([...busqueda, data]);
  };

  return (
    <>
      <div className="ajustes">
        <BuscadorColaborador
          colaboradores={colaboradores}
          getColaboradores={cargaData}
        />
        <FormColaborador guardarColaborador={guardarColaborador} />
        <TablaColaborador
          colaboradores={colaboradores}
          BuscadorColaborador={busqueda}
        />
      </div>
    </>
  );
}
export default App;
