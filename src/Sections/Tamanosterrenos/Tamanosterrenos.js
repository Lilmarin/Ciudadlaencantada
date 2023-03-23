import React, { useState, useEffect } from "react";
import FormContacto from "../../Components/FormularioContacto/FormContacto";
import "../Contacto/Contacto.scss";

import "./Tamanosterrenos.scss";
import {
  Backgroundbigcontainer,
  BtnRed,
  Containeramenidades,
  Littleline,
  Montserrat,
} from "../../Components/Styled";
import { Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tamanosterrenos = () => {
  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }
  
  // const [currentSlide, setCurrentSlide] = React.useState(0);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [paginationDots, setPaginationDots] = useState([]);

  useEffect(() => {
    const newDots = [];
    for (let i = 0; i < 3; i++) {
      const isActive = i === currentSlide;
      const dotStyle = {
        backgroundColor: isActive ? "red" : "grey",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        margin: "0 5px",
      };
      newDots.push(<div key={i} style={dotStyle} />);
    }
    setPaginationDots(newDots);
  }, [currentSlide]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // customPaging: () => paginationDots,
    customPaging: (index) => {
      const isActive = index === currentSlide;
      const dotStyle = {
        backgroundColor: isActive ? "#B3282D" : "#FFFFFF99",
        width: "30px",
        height: "8px",
        marginTop: "-1.7em",
      };
      return <div style={dotStyle} onClick={() => setCurrentSlide(index)} />;
    },

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
          <Grid className="tamanos-item dos" item md={4} sm={4} xs={12}></Grid>
          <Grid className="tamanos-item tres" item md={8} sm={8} xs={12}>
            <Slider {...settings}>
              <div className="backgrounds-containers imagen-uno"></div>
              <div className="backgrounds-containers imagen-dos"></div>
              <div className="backgrounds-containers imagen-tres"></div>
            </Slider>
          </Grid>
        </Grid>
        <button
          className="button-contacto derecha"
          onClick={togglePopup}
        >
          Contactar un asesor express
        </button>
        {showPopup && (
          <FormContacto
            closePopup={togglePopup}
          />
        )}
        
      </Containeramenidades>
    </Backgroundbigcontainer>
  );
};

export default Tamanosterrenos;
