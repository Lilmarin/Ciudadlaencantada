import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import PageWrapper from "./Sections/PageWrapper";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Headerday from "./assets/img/CIUDAD_ENCANTADA_HOME_HEADER_DIA.png";
import Headernight from "./assets/img/CIUDAD_ENCANTADA_HOME_HEADER_NOCHE.png";
import moment from "moment";

function App() {
  //Cambio de background según la hora
  const morningImage = Headerday;
  const afternoonImage = Headerday;
  const nightImage = Headernight;

  useEffect(() => {
    // Función para actualizar el fondo
    const updateBackground = () => {
      const now = moment(); // Obtener la hora actual
      const morningTime = moment("06:00:00", "HH:mm:ss"); // 6:00 a.m.
      const afternoonTime = moment("12:00:00", "HH:mm:ss"); // 12:00 p.m.
      const nightTime = moment("18:00:00", "HH:mm:ss"); // 6:00 p.m.

      if (now.isBefore(morningTime)) {
        setBackgroundImage(nightImage);
      } else if (now.isBefore(afternoonTime)) {
        setBackgroundImage(morningImage);
      } else if (now.isBefore(nightTime)) {
        setBackgroundImage(afternoonImage);
      } else {
        setBackgroundImage(nightImage);
      }
    };

    // Establecer el fondo al cargar la página
    updateBackground();
    // Programar la actualización del fondo cada minuto
    const intervalId = setInterval(updateBackground, 15 * 60 * 1000);
    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, []);
  //fin del cambio de background según la hora

  // Cambio de background en Header

  const [backgroundImage, setBackgroundImage] = useState(Headerday);
  const [isFirstImage, setIsFirstImage] = useState(true);
  const handleClick = () => {
    if (isFirstImage) {
      setBackgroundImage(Headerday);
      setIsFirstImage(false);
    } else {
      setBackgroundImage(Headernight);
      setIsFirstImage(true);
    }
  };

  //Fin de cambio en Background de Home

  //Enlace a Galeria del sitio web
  const myRef = useRef(null);
  const executeScroll = () => {
    window.scrollTo({
      top: myRef.current.offsetTop - 65,
      behavior: "smooth",
    });
  };
  //Fin de enlaces a Galeria del sitio web
  //Enlace a Ubicacion del sitio web
  const ubicacion = useRef(null);
  const executeScrollubicacion = () => {
    window.scrollTo({
      top: ubicacion.current.offsetTop - 65,
      behavior: "smooth",
    });
  };
  //Fin de enlaces a Ubicacion del sitio web
  //Enlace a Amenidades del sitio web
  const amenidades = useRef(null);
  const executeScrollamenidades = () => {
    window.scrollTo({
      top: amenidades.current.offsetTop - 65,
      behavior: "smooth",
    });
  };
  //Fin de enlaces a Amenidades del sitio web
  //Enlace a Infraestructura del sitio web
  const infraestructura = useRef(null);
  const executeScrollinfraestructura = () => {
    window.scrollTo({
      top: infraestructura.current.offsetTop - 65,
      behavior: "smooth",
    });
  };
  //Fin de enlaces a infraestructura del sitio web

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="Construccion"
          element={<PageWrapper>Construccion</PageWrapper>}
        />
        <Route
          path="/"
          element={
            <PageWrapper
              backgroundImage={backgroundImage}
              handleClick={handleClick}
              executeScroll={executeScroll}
              executeScrollubicacion={executeScrollubicacion}
              executeScrollamenidades={executeScrollamenidades}
              executeScrollinfraestructura={executeScrollinfraestructura}
            >
              <Home
                backgroundImage={backgroundImage}
                handleClick={handleClick}
                myRef={myRef}
                ubicacion={ubicacion}
                amenidades={amenidades}
                infraestructura={infraestructura}
              />
            </PageWrapper>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
