import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Cita = ({ cita, eliminarCita }) => {
  const [modal, setModal] = useState(false);
  const actualizarModal = () => {
    setModal(!modal);
  };
  const confirmarEliminarCita = () => {
    actualizarModal();
    // Timeout para que se haga la animacion de cierre de modal
    setTimeout(() => {
      eliminarCita(id);
    }, 75);
  };

  const modalStyles = {
    top:"35%"
  };
  const { nombreMascota, nombrePropietario, fecha, hora, sintomas, id } = cita;
  return (
    <div className="cita mx-3">
      <p>
        Mascota: <span>{nombreMascota}</span>
      </p>
      <p>
        Propietario: <span>{nombrePropietario}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Hora: <span>{hora}</span>
      </p>
      <p>
        Sintomas: <span>{sintomas}</span>
      </p>

      <Button
        type="button"
        className="btn btn-danger w-100"
        onClick={actualizarModal}
      >
        Eliminar &times;
      </Button>
      <Modal isOpen={modal} style={modalStyles} >
        <ModalHeader>
          <h4>Confirmación</h4>
        </ModalHeader>
        <ModalBody>
          <h3>Esta seguro que desea eliminar esta cita ?</h3>
        </ModalBody>
        <ModalFooter>
          <div className="btn-group">
            <Button
              type="button"
              className="btn btn-success w-100"
              onClick={confirmarEliminarCita}
            >
              Confimar
            </Button>
            <Button
              type="button"
              className="btn btn-danger w-100"
              onClick={actualizarModal}
            >
              Cancelar
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};
export default Cita;
