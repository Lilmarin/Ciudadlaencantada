import React from "react";
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
        <BtnRed varmargin="40px 0px 40px auto" varmarginm="40px auto">
          CONTACTAR ASESOR EXPRESS
        </BtnRed>
      </Containeramenidades>
    </Backgroundbigcontainer>
  );
};

export default Tamanosterrenos;
