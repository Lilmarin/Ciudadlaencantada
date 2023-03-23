import React from "react";
import Header from "../Sections/Header/Header";
import Amenidades from "../Sections/Amenidades/Amenidades";
import CLEdesarrollo from "../Sections/CLEdesarrollo/CLEdesarrollo";
import Contacto from "../Sections/Contacto/Contacto";
import Galeria from "../Sections/Galeria/Galeria";
import Infraestructura from "../Sections/Infraestructura/Infraestructura";
import Presentacion from "../Sections/Presentacion/Presentacion";
import Propiedadesmexico from "../Sections/Propiedadesmexico/Propiedadesmexico";
import Resultados from "../Sections/Resultados/Resultados";
import Tamanosterrenos from "../Sections/Tamanosterrenos/Tamanosterrenos";
import Ubicacion from "../Sections/Ubicacion/Ubicacion";


const Home = (props) => {
  return (
    <div>
      <Header
        backgroundImage={props.backgroundImage}
        handleClick={props.handleClick}
      />
      <Galeria galeria={props.galeria} />
      <Ubicacion ubicacion={props.ubicacion} />
      <Amenidades amenidades={props.amenidades} />
      <Infraestructura infraestructura={props.infraestructura} />
      <Tamanosterrenos />
      <Presentacion />
      <CLEdesarrollo />
      <Propiedadesmexico />
      <Resultados />
      <Contacto />
      
    </div>
  );
};

export default Home;
