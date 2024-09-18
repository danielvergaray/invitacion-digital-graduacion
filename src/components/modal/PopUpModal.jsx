import { useState, useContext } from "react";
import InfoContext from "../infoContext/InfoContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { GoAlertFill } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

function PopUpModal({abrirPopUp, setAbrirPopUp}) {
  //const { invitadoRegistrado, setInvitadoRegistrado } = useContext(InfoContext);

  const handleClose = () => {
   
    setAbrirPopUp(false)
  };
  

 
  const scrollToTop = () => {
    // Realiza el desplazamiento suave
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      

      <Modal show={abrirPopUp} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUpModal;
