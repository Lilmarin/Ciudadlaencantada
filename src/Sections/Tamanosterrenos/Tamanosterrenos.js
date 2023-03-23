import React, { useState } from "react";
import FormContacto from "../../Components/FormularioContacto/FormContacto";
import "../Contacto/Contacto.scss";
import "./Tamanosterrenos.scss";
import {
  Backgroundbigcontainer,
  Containeramenidades,
  Littleline,
  Montserrat,
} from "../../Components/Styled";
import { Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Roboto } from "../../Components/Styled2";

const Tamanosterrenos = () => {
  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const datos = [
    { id: "dos", lote: "200 m2", tamano: "10x20", precio: "$189,000 MXN" },
    { id: "tres", lote: "250 m2", tamano: "12.5x20", precio: "$236,250 MXN" },
  ];
  return (
    <Backgroundbigcontainer
      className="Tamanos-Terrenos"
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
          Tamaños de terrenos
        </Montserrat>

        <Grid
          className="tamanos-container"
          container
          spacing={2}
          style={{ gridColumnGap: "0px" }}
        >
          <Grid
            className="tamanos-item uno"
            item
            md={12}
            sm={12}
            xs={12}
          ></Grid>
          <Grid className="tamanos-item dos" item md={4} sm={4} xs={12}>
            <div className="content-up-bottom upp">
              <svg
                width="53"
                height="119"
                viewBox="0 0 53 119"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="24" y="29" width="5" height="90" fill="#E0E0E0" />
                <circle cx="26.3789" cy="26.0586" r="26" fill="#B3282D" />
                <circle cx="26.3789" cy="26.0586" r="21" fill="white" />
                <circle cx="26.3789" cy="26.0586" r="12" fill="#B3282D" />
              </svg>
              <div className="Eng-elementos">
                <Montserrat
                  fontsize="24px"
                  fontsizem="16px"
                  varcolor="#B3282D"
                  varweight="700"
                >
                  $3,150 pesos/m<sup>2</sup>
                </Montserrat>
                <Roboto
                  fontsize="20px"
                  fontsizem="14px"
                  varcolor="#333333"
                  varweight="500"
                >
                  Enganche desde:
                </Roboto>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Lotes</th>
                  <th>Tamaños</th>
                  <th>Desde</th>
                </tr>
              </thead>
              <tbody>
                <tr key="uno">
                  <td className="uno">160 m2</td>
                  <td className="uno">8x20</td>
                  <td className="uno">$151,200 MXN</td>
                </tr>
                {datos.map((item) => (
                  <tr key={item.id}>
                    <td>{item.lote}</td>
                    <td>{item.tamano}</td>
                    <td>{item.precio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="content-up-bottom bottomm">
              <Roboto
                varmargin="20px auto .5em 0"
                varcolor="#828282"
                fontsize="12px"
                fontsizem="10px"
              >
                Enganche de 30% del valor *
              </Roboto>
              <Roboto
                varmargin="0px 5px 0 0"
                varcolor="#828282"
                fontsize="12px"
                fontsizem="10px"
              >
                Ultimos cupos:
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.56868 3.57296L6.81868 2.40629H3.72526V1.23962H2.55859V12.9063H3.72526V8.23962H6.46518L8.21518 9.40629H11.8919V3.57296H8.56868Z"
                    fill="#B3282D"
                  />
                </svg>
              </Roboto>
            </div>
          </Grid>
          <Grid className="tamanos-item tres" item md={8} sm={8} xs={12}>
            <Slider {...settings}>
              <div className="backgrounds-containers imagen-uno"></div>
              <div className="backgrounds-containers imagen-dos"></div>
              <div className="backgrounds-containers imagen-tres"></div>
            </Slider>
          </Grid>
        </Grid>
        <button className="button-contacto derecha" onClick={togglePopup}>
          Contactar un asesor express
        </button>
        {showPopup && <FormContacto closePopup={togglePopup} />}
      </Containeramenidades>
    </Backgroundbigcontainer>
  );
};

export default Tamanosterrenos;
