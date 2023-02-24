import React from "react";
import { ComponenteGrecia } from "../../Components/Styled";
import "./Presentacion.scss";

const Presentacion = () => {
  return (
    <div className="Section-presentacion">
      <ComponenteGrecia>
        <hr />
        <h2>Presentación desarrollo</h2>
        <p>
          Ciudad la Encantada es un desarrollo en el que se vive un entorno de
          armonía y seguridad con una ubicación priviligiada en Gómez Palacio y
          con amenidades como ciclovía, plaza central, colegio, restaurantes y
          una infrastructura para que todos vivan sumamente comódos.{" "}
        </p>
      </ComponenteGrecia>

      <ComponenteGrecia varbackgroundcolor="pink" />
    </div>
  );
};

export default Presentacion;
