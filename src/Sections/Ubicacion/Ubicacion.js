import React from "react";
import { Littleline } from "../../Components/Styled";
import {
  Containerubicacion,
  Columnas,
  Columna,
  Roboto,
  Title,
} from "../../Components/Styled2";
import "./Ubicacion.scss";

const Ubicacion = ({ ubicacion }) => {
  return (
    <div ref={ubicacion} className="Section-ubicacion">
      <Containerubicacion>
        <Columnas varalignitems="center" className="gridgap">
          <Columna className="background-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.9584128446522!2d-103.47157628603547!3d25.57305032262686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fd97b63aabf37%3A0x2763e444ba8d123a!2sCiudad%20La%20Encantada!5e0!3m2!1ses!2smx!4v1678742091403!5m2!1ses!2smx"
              className="mapa"
              title="ciudad la encantada"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Columna>
          <Columna>
            <div className="contubicacion">
              <Littleline
                varmaxwidth="60px"
                varminheight="5px"
                className="displaynone"
              />
              <Title varpaddi="20px 0 20px">Ubicación</Title>
              <Roboto>
                Te brindamos una ubicación premium justo en en el corazón de la
                Laguna, frente al Periférico que es el Blvd central.
              </Roboto>
              <ul>
                <li>
                  <Roboto>A 1 min de Walmart Gómez Palacio</Roboto>
                </li>
                <li>
                  <Roboto>A 5 min de Torreón</Roboto>
                </li>
                <li>
                  <Roboto>A 5 min del Campestre de Gómez</Roboto>
                </li>
                <li>
                  <Roboto>A 10 min de Lerdo</Roboto>
                </li>
                <li>
                  <Roboto>A 5 min de Galerías</Roboto>
                </li>
                <li>
                  <Roboto> A 7 min de Paseo Gómez Palacio</Roboto>
                </li>
              </ul>
            </div>
          </Columna>
        </Columnas>
      </Containerubicacion>
    </div>
  );
};

export default Ubicacion;
