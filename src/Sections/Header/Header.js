import React from "react";
import "./HeaderSection.scss";
import { Grid } from "@mui/material";
import { BtnRed, Montserrat, Roboto } from "../../Components/Styled";
import Terrenosresidenciales from "../../assets/img/CIUDAD_ENCANTADA_HOME_HEADER_TERRENOS_RESIDENCIALES.png";
import Ciclovia from "../../assets/img/CIUDAD_ENCANTADA_HOME_HEADER_CICLOVIA.png";
import Ubicacion from "../../assets/img/CIUDAD_ENCANTADA_HOME_HEADER_UBICACION.png";
import Plazacentral from "../../assets/img/CIUDAD_ENCANTADA_HOME_HEADER_PLAZACENTRAL.png";

const Header = (props) => {
  return (
    <div
      className="Header-Background-CLE"
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <Montserrat
        fontsize="72px"
        varcolor="#FFFFFF"
        varweight="700"
        varmargin="10px auto 0 5.75%"
      >
        CIUDAD LA ENCANTADA
      </Montserrat>
      <Roboto
        fontsize="22px"
        varwidth="30%"
        varcolor="#FFFFFF"
        varmargin="10px auto 0 5.75%"
        varalign="left"
        varlineheight="32px"
      >
        Vive en un entorno de armonía y seguridad, con una ubicación
        priviligiada en Gómez Palacio. Amenidades, tecnología e infrastructura
        de vanguardia.
      </Roboto>
      <BtnRed varmargin="40px auto 250px 5.75%">CONTÁCTANOS</BtnRed>
      <Grid
        className="Bottoom-box-caracteristicas"
        container
        columnSpacing={{ xs: 0, sm: 2, md: 3 }}
      >
        <Grid item xs={12} sm={6} md={3} className="grid-item-card">
          <img src={Terrenosresidenciales} />
          <Montserrat
            varweight="600"
            fontsize="28px"
            varcolor="#ffffff"
            varmaxwidth="95%"
          >
            Terrenos residenciales
          </Montserrat>
          <Montserrat
            fontsize="22px"
            varcolor="#ffffff"
            varmaxwidth="95%"
            varmargin="15px auto 15px"
          >
            250 M2, 200 M2, 160 M2
          </Montserrat>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="grid-item-card">
          <img src={Ubicacion} />
          <Montserrat
            varweight="600"
            fontsize="28px"
            varcolor="#ffffff"
            varmaxwidth="95%"
          >
            Ubicación
          </Montserrat>
          <Montserrat
            fontsize="22px"
            varcolor="#ffffff"
            varmaxwidth="95%"
            varmargin="15px auto 15px"
          >
            En la Laguna
          </Montserrat>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="grid-item-card">
          <img src={Ciclovia} />
          <Montserrat
            varweight="600"
            fontsize="28px"
            varcolor="#ffffff"
            varmaxwidth="95%"
          >
            Ciclovía
          </Montserrat>
          <Montserrat
            fontsize="22px"
            varcolor="#ffffff"
            varmaxwidth="95%"
            varmargin="15px auto 15px"
          >
            De 3,500m la más grande de la región.
          </Montserrat>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="grid-item-card">
          <img src={Plazacentral} />
          <Montserrat
            varweight="600"
            fontsize="28px"
            varcolor="#ffffff"
            varmaxwidth="95%"
          >
            Plaza central
          </Montserrat>
          <Montserrat
            fontsize="22px"
            varcolor="#ffffff"
            varmaxwidth="95%"
            varmargin="15px auto 15px"
          >
            Cine al aire libre, restaurantes y servicios.
          </Montserrat>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
