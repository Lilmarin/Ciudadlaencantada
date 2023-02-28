import React from "react";
import {
  Backgroundbigcontainer,
  Containeramenidades,
  Griditem,
  Gridwrapper,
  Littleline,
  Montserrat,
  Roboto,
} from "../../Components/Styled";
import ParqueCentral from "../../assets/img/CIUDAD_ENCANTADA_AMENIDADES_PARQUE_CENTRAL_HOVER.png";
import Plazascomerciales from "../../assets/img/CIUDAD_ENCANTADA_AMENIDADES_PLAZAS_COMERCIALES_HOVER.png";
import Colegio from "../../assets/img/CIUDAD_ENCANTADA_AMENIDADES_COLEGIO_HOVER.png";
import Areaverde from "../../assets/img/CIUDAD_ENCANTADA_AMENIDADES_AREA_VERDE_HOVER.png";
import Restaurantes from "../../assets/img/CIUDAD_ENCANTADA_AMENIDADES_RESTAURANTESHOVER.png";
import Servicios from "../../assets/img/CIUDAD_ENCANTADA_AMENIDADES_SERVICIOS_HOVER.png";

import ParqueCentral2 from "../../assets/img/CIUDAD_ENCANTADA_AMENIDADES_PARQUE_CENTRAL.png";
import Plazascomerciales2 from "../../assets/img/CIUDAD_ENCANTADA_AMENIDADES_PLAZAS_COMERCIALES.png";
import Colegio2 from "../../assets/img/CIUDAD_ENCANTADA_AMENIDADES_COLEGIO.png";
import Areaverde2 from "../../assets/img/CIUDAD_ENCANTADA_AMENIDADES_AREA_VERDE.png";
import Restaurantes2 from "../../assets/img/CIUDAD_ENCANTADA_AMENIDADES_RESTAURANTES.png";
import Servicios2 from "../../assets/img/CIUDAD_ENCANTADA_AMENIDADES_SERVICIOS.png";

const Amenidades = () => {
  const imagenes = [
    { imagen: { ParqueCentral }, hover: { ParqueCentral2 } },
    { imagen: { Plazascomerciales }, hover: { Plazascomerciales2 } },
    { imagen: { Colegio }, hover: { Colegio2 } },
    { imagen: { Areaverde }, hover: { Areaverde2 } },
    { imagen: { Restaurantes }, hover: { Restaurantes2 } },
    { imagen: { Servicios }, hover: { Servicios2 } },
  ];
  return (
    <Backgroundbigcontainer
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

        <Gridwrapper>
          {imagenes.map((persona, index) => (
            <Griditem
              key={index}
              varbackgroundimagehover={imagenes.hover}
              varbackgroundimage={imagenes.imagen}
            />
          ))}
        </Gridwrapper>
      </Containeramenidades>
    </Backgroundbigcontainer>
  );
};

export default Amenidades;
