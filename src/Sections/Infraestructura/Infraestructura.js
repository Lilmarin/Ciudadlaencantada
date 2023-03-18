import React from "react";
import {Backgroundbigcontainer, Littleline} from "../../Components/Styled";
import {Containerinfraestructura, Columnas, Columna, ColumnImage, Roboto, ColumnsImage, Title} from "../../Components/Styled2"
import "./Infraestructura.scss";

let camara = require('../../assets/img/CIUDAD_ENCANTADA_INFRAESTRUCTURA_icon-cam.png');
let drenajePluvial = require('../../assets/img/CIUDAD_ENCANTADA_INFRAESTRUCTURA_agua.png');
let oficina = require('../../assets/img/CIUDAD_ENCANTADA_INFRAESTRUCTURA_workspace.png');
let agua = require('../../assets/img/CIUDAD_ENCANTADA_INFRAESTRUCTURA_icon-agua.png');

let img1Infraestructura = require('../../assets/img/CIUDAD_ENCANTADA_INFRAESTRUCTURA_RECTANGLE 856.png');
let img2Infraestructura = require('../../assets/img/CIUDAD_ENCANTADA_INFRAESTRUCTURA_RECTANGLE 857.png');

const Infraestructura = () => {
  return (

  <section className="Section-Infraestructura">
    <Backgroundbigcontainer
  varbackgroundcolor="none">
    <Containerinfraestructura>
      <Columnas
      vargridgap="50px"
      vargridcolumns="52% 43%"
      varalignitems="center"
      vargrid="none"
      className="gridgapcolumns1"
      >
      <Columna>
         <ColumnsImage
         vardisplay="innerit"
         vardirection="innerit"
         varminheight="238px"
         className="gridgapcolumns2"
         >
            <ColumnImage varbackgroundimage="#FFFFFF">
            <img src={img1Infraestructura} id="image" alt="ciudad encantada-infraestructura edificio"></img>
            </ColumnImage> 
            <ColumnImage varbackgroundimage="#FFFFFF">
            <img src={img2Infraestructura} id="image" alt="ciudad encantada-infraestructura estructura edifcio"></img>
            </ColumnImage>
         </ColumnsImage>
      </Columna>
      <Columna
      >
      <div className="title">
        <Littleline>

        </Littleline>
        <Title
        varpaddi="20px 0 20px"
        >
          Infraestructura
        </Title>
        <h5
          className="padd"
        >
          En Ciudad La Encantada tendremos estos grandes beneficios.
        </h5>
      </div>
      <div className="beneficios">
        <Columnas
        vargridcolumns="10% 89%"
        vardisplay="innerit"
        vardisplaymil="innerit"
        vardirection="innerit"
        className="padd gridgapcolumns3"
        >
          <Columna>
            <img src= {camara} id="icon"alt="Sistema de video vigilancia"/>
          </Columna>
          <Columna>
            <h4>Sistema de video vigilancia </h4>
            <Roboto
            fontsize="18px"
            >
              Sistema de video vigilancia en todas las vialidades del desarrollo. Para lograr ser una de las zonas más seguras de toda la Comarca Lagunera.
            </Roboto>
          </Columna>
        </Columnas>

        <Columnas
        vargridcolumns="10% 89%"
        varmargin="30px 0 30px"
        vardisplaymil="innerit"
        vardisplay="innerit"
        vardirection="innerit"
        className="padd gridgapcolumns3"
        >
          <Columna>
            <img src= {drenajePluvial} alt="Drenaje pluvial" id="icon"/>
          </Columna>
          <Columna>
            <h4>Drenaje pluvial</h4>
            <Roboto
            fontsize="18px"
            >
              Drenaje pluvial en todo el desarrollo para evitar los encharcamientos en épocas de lluvias.
            </Roboto>
          </Columna>
        </Columnas>
        <Columnas
        vargridcolumns="10% 89%"
        vardisplay="innerit"
        vardisplaymil="innerit"
        vardirection="innerit"
        className="padd gridgapcolumns3"
        >
          <Columna>
            <img src= {oficina} id="icon" alt="Oficina de administracion central"/>
          </Columna>
          <Columna>
            <h4>Oficina de administración central </h4>
            <Roboto
            fontsize="18px"
            >
              Administración general de las cuotas de mantenimiento del desarrollo para asegurar el excelente mantenimiento del desarrollo.
            </Roboto>
          </Columna>
        </Columnas>
        <Columnas
        vargridcolumns="10% 89%"
        varmargin="30px 0 30px"
        vardisplay="innerit"
        vardisplaymil="innerit"
        vardirection="innerit"
        className="padd gridgapcolumns3"
        >
          <Columna>
            <img src= {agua} id="icon" alt="Planta de tratamiento de aguas"/>
          </Columna>
          <Columna>
            <h4>Planta de tratamiento de aguas </h4>
            <Roboto
            fontsize="18px"
            >
              Planta de tratamiento para asegurar el agua requerida para las áreas verdes de manera auto-sustentable.
            </Roboto>
          </Columna>
        </Columnas>
      </div>
      </Columna>
      </Columnas>

    </Containerinfraestructura>


  </Backgroundbigcontainer>
  </section>  
  
  );
};

export default Infraestructura;
