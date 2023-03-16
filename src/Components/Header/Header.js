import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import CLELogo from "../../assets/img/CIUDAD_ENCANTADA_LOGO.png";
import { Grid } from "@mui/material";
import { Montserrat } from "../Styled";
import SwitchButton from "./SwitchButton/SwitchButton";

const Header = ({ handleClick, executeScroll }) => {
  var elemento = document.getElementById("navbar-upper");
  window.onscroll = function () {
    var desplazamiento = window.pageYOffset; // Cantidad de desplazamiento de la página
    if (desplazamiento > 140) {
      // Si la página se desplaza más de 140 píxeles hacia abajo
      elemento.style.top = "0px"; // Mueve el elemento hacia arriba
      elemento.style.width = "100%"; //amplia el elemento si este baja
    } else {
      elemento.style.top = "40px"; // Mantiene la posición inicial del elemento
      elemento.style.width = "88.5%"; //amplia el elemento si este baja
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const specialFunction = () => {
    setIsOpen(!isOpen);
    executeScroll();
  };
  const enlaces = [
    { id: 1, texto: "Galeria", url: specialFunction },
    { id: 2, texto: "Ubicación", url: specialFunction },
    { id: 3, texto: "Amenidades", url: specialFunction },
    { id: 4, texto: "Infraestructura", url: specialFunction },
    { id: 3, texto: "Precios", url: specialFunction },
    { id: 4, texto: "Comercializador", url: specialFunction },
  ];
  return (
    <div className="Header-Container-CLE">
      <div id="navbar-upper" className="Header-upper">
        <Grid className="Grid-Links" container spacing={2}>
          <Grid className="Grid-Items-Header" item md={2}>
            <a href="https://ciudadlaencantada.com">
              <img alt="Ciudad La Encantada" src={CLELogo}></img>
            </a>
          </Grid>
          <Grid className="Grid-Items-Header" item md={7}>
            <div className="Grid-links-uls">
              {" "}
              <ul>
                {enlaces.map((e) => (
                  <NavLink className="Enlace-linked" onClick={e.url}>
                    <Montserrat
                      fontsize="18px"
                      varcolor="#333333"
                      varweight="600"
                    >
                      {" "}
                      {e.texto}
                    </Montserrat>
                  </NavLink>
                ))}
              </ul>
            </div>
          </Grid>
          <Grid className="Grid-Items-Header" item md={1}>
            <button className="button-closed" onClick={handleClick}>
              <SwitchButton />
            </button>
          </Grid>
          <Grid className="Grid-Items-Header" item md={2}>
            <div className="Phone-Whats-Item">
              {" "}
              <a>
                <svg
                  width="39"
                  height="36"
                  viewBox="0 0 39 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1293_427)">
                    <path
                      d="M7.93785 15.6C10.9268 21.2 16.0507 25.8 22.0287 28.8L26.7256 24.4C27.366 23.8001 28.2201 23.6001 28.8606 24C31.2091 24.8 33.7709 25.2 36.5465 25.2C37.8275 25.2 38.6815 26 38.6815 27.2V34C38.6815 35.2 37.8275 36 36.5465 36C16.4777 36 0.251953 20.8 0.251953 2C0.251953 0.8 1.10594 0 2.38693 0H9.85933C11.1403 0 11.9943 0.8 11.9943 2C11.9943 4.4 12.4213 6.8 13.2753 9.2C13.4888 9.8 13.2753 10.6 12.8483 11.2L7.93785 15.6Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1293_427">
                      <rect
                        width="38.4295"
                        height="36"
                        fill="white"
                        transform="translate(0.251953)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>{" "}
              <svg
                width="3"
                height="46"
                viewBox="0 0 3 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1.32715"
                  y1="0.75"
                  x2="1.32715"
                  y2="45.25"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
              <a>
                <svg
                  width="52"
                  height="50"
                  viewBox="0 0 52 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.1697 29.2915C35.6314 29.0181 32.9501 27.7192 32.4514 27.5435C31.9526 27.3579 31.5872 27.27 31.2267 27.8169C30.8613 28.3589 29.8243 29.565 29.4984 29.9312C29.1824 30.2925 28.8614 30.3364 28.3232 30.0679C25.1234 28.4858 23.0247 27.2456 20.9162 23.6665C20.3582 22.7144 21.4742 22.7827 22.5161 20.7271C22.6939 20.3657 22.605 20.0581 22.4667 19.7847C22.3285 19.5112 21.2421 16.8647 20.7878 15.7856C20.3483 14.7358 19.894 14.8823 19.5632 14.8628C19.2471 14.8433 18.8867 14.8433 18.5213 14.8433C18.1558 14.8433 17.5682 14.98 17.0695 15.5122C16.5707 16.0542 15.1634 17.3579 15.1634 20.0044C15.1634 22.6509 17.1139 25.2144 17.3806 25.5757C17.6571 25.937 21.2174 31.3667 26.6838 33.7056C30.1404 35.1802 31.4934 35.3071 33.2217 35.0532C34.2735 34.897 36.4413 33.7544 36.8906 32.4898C37.34 31.23 37.34 30.1509 37.2066 29.9263C37.0733 29.687 36.7079 29.5503 36.1697 29.2915Z"
                    fill="white"
                  />
                  <path
                    d="M46.625 16.5229C45.509 13.9009 43.9091 11.5474 41.8697 9.52588C39.8303 7.50928 37.4502 5.92236 34.7935 4.82373C32.0776 3.6958 29.1938 3.12451 26.2212 3.12451H26.1224C23.13 3.13916 20.2314 3.7251 17.5056 4.87744C14.8736 5.99072 12.5133 7.57275 10.4936 9.58935C8.47398 11.606 6.88888 13.9497 5.79265 16.562C4.65691 19.2671 4.0841 22.1431 4.09891 25.102C4.11373 28.4907 4.93344 31.855 6.46915 34.8628V42.2847C6.46915 43.5249 7.48638 44.5308 8.74063 44.5308H16.2513C19.2931 46.0493 22.6954 46.8599 26.1224 46.8745H26.2261C29.184 46.8745 32.0529 46.3081 34.754 45.1997C37.3959 44.1108 39.771 42.5483 41.8055 40.5513C43.8449 38.5542 45.4497 36.2202 46.5707 33.6177C47.736 30.9224 48.3286 28.0562 48.3434 25.0972C48.3582 22.1235 47.7755 19.2378 46.625 16.5229ZM39.1637 37.9097C35.7021 41.2983 31.1098 43.1636 26.2212 43.1636H26.1372C23.1596 43.1489 20.2017 42.4165 17.5895 41.0396L17.1747 40.8198H10.222V33.9448L9.99983 33.5347C8.60731 30.9517 7.86661 28.0269 7.85179 25.0825C7.83204 20.2144 9.71342 15.644 13.1651 12.2017C16.6118 8.75928 21.219 6.85498 26.1422 6.83545H26.2261C28.6951 6.83545 31.09 7.30908 33.3467 8.24658C35.549 9.15967 37.5243 10.4731 39.2229 12.1528C40.9167 13.8276 42.2499 15.7856 43.1733 17.9634C44.1313 20.2192 44.6103 22.6118 44.6004 25.0825C44.5708 29.9458 42.64 34.5015 39.1637 37.9097Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Header;
