import React, { useState } from "react";
import FormContacto from "../../Components/FormularioContacto/FormContacto";
import "../Contacto/Contacto.scss";

import {
  Containerpresentacion,
  Columnas,
  Columna,
  Title,
  Roboto,
} from "../../Components/Styled2";
import { Littleline } from "../../Components/Styled";
import "./Presentacion.scss";

let DispositivosMoviles = require("../../assets/img/CIUDAD_ENCANTADA_PRESENTACION_MACBOOK_SMARTFHONE.png");

const Presentacion = () => {
  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }
  return (
    <div className="Section-presentacion">
      <Containerpresentacion className="visible">
        <Columnas
          vargridcolumns="46% 54%"
          varalignitems="center"
          varjustifycontent="center"
          className="gripgap"
        >
          <Columna>
            <Littleline />
            <Title varpadd="20px 0 20px">Presentación desarrollo</Title>
            <Roboto>
              <p>
                <b>Ciudad la Encantada</b> es un desarrollo en el que se vive un
                entorno de armonía y seguridad con una ubicación priviligiada en
                Gómez Palacio y con amenidades como ciclovía, plaza central,
                colegio, restaurantes y una infrastructura para que todos vivan
                sumamente comódos.{" "}
              </p>
            </Roboto>

            <button
              className="button-contacto presentacionbtn visible"
              onClick={togglePopup}
            >
              <Columnas
                vargridcolumns="12% 85%"
                varalignitems="center"
                varjustifycontent="center"
              >
                <Columna>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8154 15.2966C10.8374 15.3256 10.8654 15.349 10.8973 15.3651C10.9293 15.3812 10.9644 15.3896 11 15.3896C11.0356 15.3896 11.0707 15.3812 11.1027 15.3651C11.1346 15.349 11.1626 15.3256 11.1846 15.2966L14.4658 11.0069C14.5859 10.8495 14.4775 10.6164 14.2812 10.6164H12.1104V0.371826C12.1104 0.238623 12.0049 0.129639 11.876 0.129639H10.1182C9.98926 0.129639 9.88379 0.238623 9.88379 0.371826V10.6133H7.71875C7.52246 10.6133 7.41406 10.8464 7.53418 11.0039L10.8154 15.2966ZM21.7227 14.2371H19.9648C19.8359 14.2371 19.7305 14.346 19.7305 14.4792V19.1414H2.26953V14.4792C2.26953 14.346 2.16406 14.2371 2.03516 14.2371H0.277344C0.148437 14.2371 0.0429688 14.346 0.0429688 14.4792V20.4734C0.0429688 21.0092 0.461914 21.4421 0.980469 21.4421H21.0195C21.5381 21.4421 21.957 21.0092 21.957 20.4734V14.4792C21.957 14.346 21.8516 14.2371 21.7227 14.2371Z"
                      fill="white"
                    />
                  </svg>
                </Columna>
                <Columna>¡Descarga gratis!</Columna>
              </Columnas>
            </button>
            {showPopup && <FormContacto closePopup={togglePopup} />}
          </Columna>
          <Columna>
            <img
              src={DispositivosMoviles}
              alt="dispositivos moviles"
              className="imageDispositivos"
            ></img>
          </Columna>
        </Columnas>
      </Containerpresentacion>

      <Containerpresentacion className="visible2">
        <Columnas
          vargridcolumns="46% 54%"
          varalignitems="center"
          varjustifycontent="center"
          className="gripgap"
          vardirection="column"
        >
          <Columna>
            <Littleline varmaxwidth="60px" varminheight="5px" />
            <Title varpadd="20px 0 20px" fontsizem="25px" varalignt="left">
              Presentación desarrollo
            </Title>
            <Roboto fontsizem="18px" varcolor="#333333">
              En “nombre del infoproducto podras encontrar .... sinopsis de lo
              que hay. Planta de tratamiento para asegurar el agua requerida
              para las áreas verdes de manera auto-sustentable.Planta de
              tratamiento para asegurar el agua requerida para las áreas verdes
              de manera auto-sustentable.
            </Roboto>
          </Columna>

          <Columna>
            <img
              src={DispositivosMoviles}
              className="imageDispositivos"
              alt="dispositivos moviles"
            ></img>
          </Columna>
          <Columna></Columna>
        </Columnas>
        <div align="right">
          <button
            className="button-contacto presentacionbtn visible2"
            onClick={togglePopup}
          >
            <Columnas
              vargridcolumns="12% 85%"
              varalignitems="center"
              varjustifycontent="center"
              vardirection="column"
              vardisplay="innerit"
              vardisplaymil="innerit"
            >
              <Columna>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8154 15.2966C10.8374 15.3256 10.8654 15.349 10.8973 15.3651C10.9293 15.3812 10.9644 15.3896 11 15.3896C11.0356 15.3896 11.0707 15.3812 11.1027 15.3651C11.1346 15.349 11.1626 15.3256 11.1846 15.2966L14.4658 11.0069C14.5859 10.8495 14.4775 10.6164 14.2812 10.6164H12.1104V0.371826C12.1104 0.238623 12.0049 0.129639 11.876 0.129639H10.1182C9.98926 0.129639 9.88379 0.238623 9.88379 0.371826V10.6133H7.71875C7.52246 10.6133 7.41406 10.8464 7.53418 11.0039L10.8154 15.2966ZM21.7227 14.2371H19.9648C19.8359 14.2371 19.7305 14.346 19.7305 14.4792V19.1414H2.26953V14.4792C2.26953 14.346 2.16406 14.2371 2.03516 14.2371H0.277344C0.148437 14.2371 0.0429688 14.346 0.0429688 14.4792V20.4734C0.0429688 21.0092 0.461914 21.4421 0.980469 21.4421H21.0195C21.5381 21.4421 21.957 21.0092 21.957 20.4734V14.4792C21.957 14.346 21.8516 14.2371 21.7227 14.2371Z"
                    fill="white"
                  />
                </svg>
              </Columna>
              <Columna>¡Descarga gratis!</Columna>
            </Columnas>
          </button>
          {showPopup && <FormContacto closePopup={togglePopup} />}
        </div>
      </Containerpresentacion>
    </div>
  );
};

export default Presentacion;
