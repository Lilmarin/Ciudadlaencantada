import React, {useState} from "react";
import FormContacto from "../../Components/FormularioContacto/FormContacto";
import { Btn, ContainerContacto } from "../../Components/Styled2";
import "./Contacto.scss";

function Contacto() {
  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  return (
    <ContainerContacto
    className="Section-Contacto"
    >
      <button
      className="button-contacto"
       onClick={togglePopup}
      >
        Contactar un asesor
      </button>
      {showPopup && (
        <FormContacto
          closePopup={togglePopup}
        />
      )}

    </ContainerContacto>
  );
};

export default Contacto;
