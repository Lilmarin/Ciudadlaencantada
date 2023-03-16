import React from "react";
import { Columna, Columnas, ContainerResultados, Title } from "../../Components/Styled2";
import "./Resultados.scss";


let Propiedades = require("../../assets/img/CIUDAD_ENCANTADA_RESULTADOS_PROPIEDADES_VERDES.png");
let Asesores = require("../../assets/img/CIUDAD_ENCANTADA_RESULTADOS_ASESORES.png");
let Creditos = require("../../assets/img/CIUDAD_ENCANTADA_RESULTADOS_CREDITOS_GENERALES.png");
let PropiedadesenLista = require("../../assets/img/CIUDAD_ENCANTADA_RESULTADOS_PROPIEDADES_EN_LISTA.png");

const Resultados = () => {
  return (
    <ContainerResultados
    className="Section-resultados"
    >
      <Columnas
      varalignitems="center"
      >
        <Columna>
          <img src={Propiedades} alt="propiedades vendidas" className="img"></img>
          <Title
          varcolor="#ffffff"
          fontsize="42px"
          >+1, 000</Title>
        </Columna>
      </Columnas>
    </ContainerResultados>
  );
};

export default Resultados;
