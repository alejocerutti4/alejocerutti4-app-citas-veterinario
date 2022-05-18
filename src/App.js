import React, { Fragment, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {

  // Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales){
    citasIniciales = []
  }


  // Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  //UseEffect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {

    localStorage.setItem('citas', JSON.stringify(citas))

  }, [citas]);

  //Funcion que tome las citas actuales y agregue la nueva
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  const eliminarCita = (id) => {
    const citasActualizadas = citas.filter(cita => cita.id !== id);
    guardarCitas(citasActualizadas)
  };   

  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h1>{titulo}</h1>
            {citas.map((cita) => (
              <Cita cita={cita} key={cita.id} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
