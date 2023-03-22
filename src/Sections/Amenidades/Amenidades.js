import React from "react";
import "./Amenidades.scss";
import {
  Backgroundbigcontainer,
  Containeramenidades,
  Griditem,
  Gridwrapper,
  Littleline,
  Montserrat,
  Roboto,
} from "../../Components/Styled";

const Amenidades = ({ amenidades }) => {
  return (
    <Backgroundbigcontainer
      ref={amenidades}
      className="Amenidades"
      varpadding="77px 0 118px"
      varbackgroundcolor="#F5F5F5"
    >
      <Containeramenidades>
        <Littleline />
        <Montserrat
          varweight="600"
          fontsize="48px"
          fontsizem="22px"
          varmargin="20px auto"
        >
          Amenidades
        </Montserrat>
        <Roboto
          fontsize="22px"
          fontsizem="14px"
          varmargin="20px auto"
          varmaxwidth="433px"
        >
          Pensamos lo mejor para tú día a día y como elevar la calidad de vida.{" "}
        </Roboto>

        <Gridwrapper className="imagenitem imagenes-wrapper">
          <Griditem className="imagenitem parquecentral" />
          <Griditem className="imagenitem plazascomerciales" />
          <Griditem className="imagenitem colegio" />
          <Griditem className="imagenitem areaverde" />
          <Griditem className="imagenitem restaurantes" />
          <Griditem className="imagenitem servicios" />
        </Gridwrapper>
      </Containeramenidades>
    </Backgroundbigcontainer>
  );
};

export default Amenidades;
