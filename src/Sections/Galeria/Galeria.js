import React from "react";
import Carousel from "./Slider";
import "./Galeria.scss";
import { Columna, Columnas, Title, Roboto, Line } from "../../Components/Styled2";

let Carrusel1 = require("../../assets/img/CIUDAD_ENCANTADA_GALERIA_LAGUNA_INDUSTRIAL_PARK.png");

const images = [
  {
    id: 1,
    title: "Imagen 1",
    url: require("../../assets/img/CIUDAD_ENCANTADA_GALERIA_LAGUNA_INDUSTRIAL_PARK.png")
  },
  {
    id: 2,
    title: "Imagen 2",
    url: require("../../assets/img/CIUDAD_ENCANTADA_GALERIA_LAGUNA_INDUSTRIAL_PARK1.png")
  },
  {
    id: 3,
    title: "Imagen 3",
    url: require("../../assets/img/CIUDAD_ENCANTADA_GALERIA_LAGUNA_INDUSTRIAL_PARK2.png")
  },
  {
    id: 4,
    title: "Imagen 4",
    url: require("../../assets/img/CIUDAD_ENCANTADA_GALERIA_ciudad la encantada.png")
  },
  {
    id: 5,
    title: "Imagen 5",
    url: require("../../assets/img/CIUDAD_ENCANTADA_GALERIA_PLAZA CENTRAL FINAL 4_3 - Photo.png")
  },
  {
    id: 6,
    title: "Imagen 6",
    url: require("../../assets/img/CIUDAD_ENCANTADA_GALERIA_F20_6 - Foto.png")
  },
  {
    id: 7,
    title: "Imagen 7",
    url: require("../../assets/img/CIUDAD_ENCANTADA_GALERIA_PLAZA CENTRAL FINAL 4_6 - Photo.png")
  },
  {
    id: 8,
    title: "Imagen 8",
    url: require("../../assets/img/CIUDAD_ENCANTADA_GALERIA_Imagen3.png")
  }
];

const Galeria = ({galeria}) => {
  return (
    <section ref={galeria} className="Galeria-Container">
      <Columnas
      varwidth="87.4%"
      vargridcolumns="44% 65%"
      varalignitems="center"
      vardirection="column"
      className="gridgapSlider"
      >
        <Columna
        varmarginmovil="auto"
        varwidthmovil="84%"
        >
          <Line/>
          <Title
          fontsize="42px"
          varpadd="10px 0 0"
          varpaddi="10px 0 0"
          varalignt="left"
          >
            Galería del proyecto
          </Title>
          <Roboto
          fontsizem="16px"
          >
            Conoce de cerca nuestro proyecto, y no dudes en contactarnos para más información.
          </Roboto>
        </Columna>
        <Columna>
        <Carousel
          images={images}
        />
        </Columna>
      </Columnas>
      
    </section>
  
  ) 
};

export default Galeria;
