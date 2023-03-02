import React from "react";
import "./Propiedadesmexico.scss";
import { Roboto } from "../../Components/Styled2";

let propiedades_mexico = require('../../assets/img/CIUDAD_ENCANTADA_PROPIEDADES_MEXICO_pm-logo.png');
let imgDiv2 = require('../../assets/img/CIUDAD_ENCANTADA_PROPIEDADES_MEXICO_Rectangle 863.png');
let icon1 = require('../../assets/img/CIUDAD_ENCANTADA_PROPIEDADES_MEXICO_ICONO1.png');
let icon2 = require('../../assets/img/CIUDAD_ENCANTADA_PROPIEDADES_MEXICO_ICONO2.png');
let icon3 = require('../../assets/img/CIUDAD_ENCANTADA_PROPIEDADES_MEXICO_ICONO3.png');
let icon4 = require('../../assets/img/CIUDAD_ENCANTADA_PROPIEDADES_MEXICO_ICONO4.png');
let icon5 = require('../../assets/img/CIUDAD_ENCANTADA_PROPIEDADES_MEXICO_ICONO5.png');

const Propiedadesmexico = () => {
  return (
  <section className="Section-Propiedadesmexico">
      <div id="sizeContent2">
      <img src={propiedades_mexico} id="sizeimage" className="padd"/>
      <div>
      <div id="contenedor">
        <div className="sizecolumn">
          <img src={icon1} id="sizeicon"></img>
        </div>
        <div>
          <Roboto>
            Contamos con un gran equipo de asesores
          </Roboto>
        </div>
      </div>
      <div id="contenedor">
        <div className="sizecolumn">
          <img src={icon2} id="sizeicon"></img>
        </div>
        <div>
        <Roboto>
          Asesoría inmobiliaria profesional y calificada
        </Roboto>
        </div>
      </div>
      <div id="contenedor">
        <div className="sizecolumn">
          <img src={icon3} id="sizeicon"></img>
        </div>
        <div>
        <Roboto>
          Oficinas en Torreón y en Ciudad La Encantada
        </Roboto>
        </div>
      </div>
      <div id="contenedor">
        <div className="sizecolumn">
          <img src={icon4} id="sizeicon"></img>
        </div>
        <div>
        <Roboto>
          Tramitamos créditos con la tasa más baja del mercado
        </Roboto>
        </div>
      </div>
      <div id="contenedor">
        <div className="sizecolumn">
          <img src={icon5} id="sizeicon"></img>
        </div>
        <div>
        <Roboto>
          Crédito propio
        </Roboto>
        </div>
      </div>

      </div>
      </div>
      <div id="sizeContent">
      <img src={imgDiv2} id="sizeimage2"></img>
      </div>
    

  </section>
  );
};

export default Propiedadesmexico;
