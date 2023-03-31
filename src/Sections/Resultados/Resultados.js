import React from "react";
import { Columna, Columnas, ContainerResultados, Title, Line } from "../../Components/Styled2";
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
      <Line
      backgroundcolor="white"
      >
      </Line>
      <Title
      fontsize="40px"
      varcolor="white"
      varpadd="20px 10px 40px"
      >Licencia API en resumen</Title>
      <Columnas
      varalignitems="center"
      vargridcolumns = "25% 25% 25% 25%"
      className="gridgap"
      >
        <Columna>
          <img src={Propiedades} alt="propiedades vendidas" className="img"></img>
          <Title
          varcolor="#ffffff"
          fontsize="42px"
          varalign="center"
          varjustifycontent="center"
          >
            +1, 000
          </Title>
          <Title
          varcolor="#ffffff"
          fontsize="26px"
          varweight="500"
          varjustifycontent="center"
          >
            Propiedades vendidas
          </Title>
        </Columna>
        <Columna>
          <img src={Asesores} alt="propiedades vendidas" className="img"></img>
          <Title
          varcolor="#ffffff"
          fontsize="42px"
          varalign="center"
          varjustifycontent="center"
          >
            +35
          </Title>
          <Title
          varcolor="#ffffff"
          fontsize="26px"
          varweight="500"
          varjustifycontent="center"
          >
            Asesores
          </Title>
        </Columna>
        <Columna>
          <img src={Creditos} alt="propiedades vendidas" className="img"></img>
          <Title
          varcolor="#ffffff"
          fontsize="42px"
          varalign="center"
          varjustifycontent="center"
          >
            +300
          </Title>
          <Title
          varcolor="#ffffff"
          fontsize="26px"
          varweight="500"
          varjustifycontent="center"
          >
            Créditos generados
          </Title>
        </Columna>
        <Columna>
          <img src={PropiedadesenLista} alt="propiedades vendidas" className="img"></img>
          <Title
          varcolor="#ffffff"
          fontsize="42px"
          varalign="center"
          varjustifycontent="center"
          >
            +8, 000
          </Title>
          <Title
          varcolor="#ffffff"
          fontsize="26px"
          varweight="500"
          varjustifycontent="center"
          >
            Propiedades en lista
          </Title>
        </Columna>
      </Columnas>
    </ContainerResultados>
  );
};

export default Resultados;
