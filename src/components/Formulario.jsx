import React, { useState } from "react";
import shortid from 'shortid'
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {
    // Crear State de citas
    const [cita, actualizarCita] = useState({
        nombreMascota: "",
        nombrePropietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
    });

    const [error, actualizarError] = useState(false)

    // Funcion que se ejecuta cada que el usuario escribe en un input
    const actualizarState = (event) => {
        actualizarCita({
        ...cita,
        [event.target.name]: event.target.value,
        });
    };

    //   Cuando el usuario envia el formulario
    const submitCita = (event) => {
        event.preventDefault();

        // Validar
        if(nombreMascota.trim() === '' || nombrePropietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true)
            return;
        }

        // Eliminar alerta de error
        actualizarError(false)

        // Asignar un ID
        cita.id = shortid.generate()

        // Crear la cita
        crearCita(cita)

        // Reiniciar el form
        actualizarCita({
            nombreMascota: "",
            nombrePropietario: "",
            fecha: "",
            hora: "",
            sintomas: ""
        })
    };

    const { nombreMascota, nombrePropietario, fecha, hora, sintomas } = cita;

    return (
        <div className="appContainer">
            <h1 className="text-center">Crear cita</h1>
            {
                error ? <p className="alerta-error">Todos los campos son obligatorios</p>: null
            }
            <form className="form-group formContainer" onSubmit={submitCita}>
                <label className="mt-2" htmlFor="nombreMascota ">
                Nombre Mascota
                </label>
                <input
                type="text"
                className="form-control w-75 "
                name="nombreMascota"
                id="nombreMascota"
                aria-describedby="helpId"
                placeholder="Ingrese nombre de la mascota..."
                onChange={actualizarState}
                value={nombreMascota}
                />
                <label className="mt-2" htmlFor="nombrePropietario ">
                Nombre Dueño
                </label>
                <input
                type="text"
                className="form-control w-75 "
                name="nombrePropietario"
                id="nombrePropietario"
                aria-describedby="helpId"
                placeholder="Ingrese nombre del dueño..."
                onChange={actualizarState}
                value={nombrePropietario}
                />
                <label className="mt-2" htmlFor="fecha ">
                Fecha
                </label>
                <input
                type="date"
                className="form-control w-75 "
                name="fecha"
                id="fecha"
                aria-describedby="helpId"
                onChange={actualizarState}
                value={fecha}
                />
                <label className="mt-2" htmlFor="hora ">
                Hora
                </label>
                <input
                type="time"
                className="form-control w-75 "
                name="hora"
                id="hora"
                aria-describedby="helpId"
                onChange={actualizarState}
                value={hora}
                />
                <label className="mt-2" htmlFor="sintomas ">
                Síntomas
                </label>
                <textarea
                className="form-control w-75 "
                name="sintomas"
                id="sintomas"
                aria-describedby="helpId"
                onChange={actualizarState}
                value={sintomas}
                />
                <button type="submit" className="btn btn-primary w-75 mt-3">
                AGREGAR CITA
                </button>
            </form>
        </div>
    );
};

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
export default Formulario;
