import React from "react";
import { Littleline } from "../../Components/Styled";
import {
  ConteinerCLEdesarrollo,
  Columnas,
  Columna,
  Roboto,
  Btn,
} from "../../Components/Styled2";
import "./CLEdesarrollo.scss";

let logo_CLEdesarrollo = require("../../assets/img/CIUDAD_ENCANTADA_LOGO.png");

const CLEdesarrollo = () => {
  return (
    <ConteinerCLEdesarrollo className="Section-cledesarrollo">
      <Columnas varalignitems="center">
        <Columna className="cle-desarrollo">
          <div className="divlogo">
            <img src={logo_CLEdesarrollo} alt="logo ciudad encantada"></img>
          </div>
          <div className="divcolumn">
            <Littleline
              backgroundcolor="white"
              varmaxwidth="60px"
              className="displaynone"
            />
            <h5>
              {" "}
              <strong className="fontl">El mejor desarrollo</strong> de La
              Laguna costo-beneficio. Tranquilidad y calidad de vida en solo
              lugar.
            </h5>
            <Roboto varcolor="#ffffff" fontsize="24px">
              Llena los siguientes formualrios para
            </Roboto>
            <Btn
              varbackgroundcolor="#00394C"
              varwidth="320px"
              varpadd="15px 0 15px"
              varmargin="30px 0 30px"
              varbackgroundcolorh="black"
              varwidthmovil="100%"
            >
              Contactar un asesor
            </Btn>
          </div>
        </Columna>
        <Columna>
          <iframe
            width="100%"
            className="video"
            src="https://www.youtube.com/embed/qnMW3BgMFXo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Columna>
      </Columnas>
    </ConteinerCLEdesarrollo>
  );
};

export default CLEdesarrollo;
