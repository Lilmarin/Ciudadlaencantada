import styled from "styled-components";

//Textos

export const Roboto = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: ${(props) => props.varweight || "400"};
  color: ${(props) => props.varcolor || "#4F4F4F"};
  font-size: ${(props) => props.fontsize || "22px"};
  display: ${(props) => props.vardisplayall || "flex"};
  line-height: ${(props) => props.varlineheight || "136%"};
  text-align: ${(props) => props.varalign || "left"};
  align-items: center;
  margin: ${(props) => props.varmargin || "0px"};
  max-width: ${(props) => props.varmaxwidth || "auto"};
  width: ${(props) => props.varwidth || "auto"};
  padding: ${(props) => props.varpadd || "auto"};
  @media (max-width: 1000px) {
    width: ${(props) => props.varwidthmil || "auto"};
  }
  @media (max-width: 500px) {
    font-size: ${(props) => props.fontsizem || "18px"};
    width: ${(props) => props.varwidthmovil || "auto"};
    margin: ${(props) => props.varmarginmovil || "auto"};
  }
`;
export const Title = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: ${(props) => props.varweight || "600"};
  color: ${(props) => props.varcolor || "#333333"};
  font-size: ${(props) => props.fontsize || "48px"};
  display: flex;
  line-height: ${(props) => props.varlineheight || "130%"};
  text-align: ${(props) => props.varalign || "left"};
  align-items: center;
  justify-content: ${(props) => props.varjustifycontent || "inherit"};
  margin: ${(props) => props.varmargin || "0px"};
  max-width: ${(props) => props.varmaxwidth || "auto"};
  width: ${(props) => props.varwidth || "auto"};
  padding: ${(props) => props.varpadd || "auto"};
  @media (max-width: 1000px) {
    padding: ${(props) => props.varpaddi || "auto"};
    font-size: ${(props) => props.fontsizemil || "auto"};
    width: ${(props) => props.varwidthmil || "auto"};
  }
  @media (max-width: 500px) {
    text-align: ${(props) => props.varalignt || "center"};
    font-size: ${(props) => props.fontsizem || "26px"};
    margin: ${(props) => props.varmarginmovil || "0"};
  }
`;

export const Line = styled.div`
  min-height: ${(props) => props.varminheight || "4px"};
  min-width: ${(props) => props.varmaxwidth || "120px"};

  max-width: ${(props) => props.varmaxwidth || "120px"};
  background-color: ${(props) => props.backgroundcolor || "#B3282D"};
  @media (max-width: 500px) {
    min-width: ${(props) => props.varmaxwidthmovil || "60px"};
    max-width: ${(props) => props.varmaxwidthmovil || "60px"};
  }
`;

//Botones
export const CLE_Button = styled.div`
  background-color: pink;
`;

//contenedores

export const Containerinfraestructura = styled.div`
  width: 89.4%;
  max-width: 1709px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 850px) {
    width: 70%;
    padding-top: 100px;
    margin: auto;
  }
  @media (max-width: 450px) {
    width: 83%;
    margin: auto;
  }
`;

export const Columnas = styled.div`
  width: ${(props) => props.varwidth || "100%"};
  max-width:100%;
  display: ${(props) => props.vardisplayall || "grid"};
  grid-template-columns: ${(props) => props.vargridcolumns || "50% 50%"};
  justify-content: ${(props) => props.varjustifycontent || "center"};
  align-items: ${(props) => props.varalignitems || "auto"};
  margin: ${(props) => props.varmargin || "0px"};
  min-height: ${(props) => props.varminheight || "0px"};
  position: relative;  
  @media (max-width: 1000px) {
    grid: ${(props) => props.vargrid || "innerit"};
    display: ${(props) => props.vardisplaymil || "flex"};
    flex-direction: ${(props) => props.vardirection || "column"};
  }
  @media (max-width: 500px) {
    grid-template-columns: ${(props) =>
      props.vargridcolumnsmovil || props.vargridcolumns};
    width: ${(props) => props.varwidthmovil || "auto"};
    grid: ${(props) => props.vargrid || "innerit"};
    display: ${(props) => props.vardisplay || "flex"};
    flex-direction: ${(props) => props.vardirection || "column-reverse"}; 
    display: ${(props) => props.vardisplaymovil || (props.vardisplay)};
  }
`;

export const Columna = styled.div`
  width: 100%;
  display: ${(props) => props.vardisplay || "flex"};
  position: relative;
  flex-direction: column;
  @media (max-width: 800px) {
    margin: ${(props) => props.varmarginmovil || "0px"};
    width: ${(props) => props.varwidthmovil || "100%"};
  }
  @media (max-width: 500px) {
    display: ${(props) => props.vardisplaymovil || (props.vardisplay)};
  }
`;

export const ColumnsImage = styled.div`
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: ${(props) => props.vargridcolumns || "50% 50%"};

  justify-content: ${(props) => props.varjustifycontent || "center"};
  align-items: ${(props) => props.varalignitems || "auto"};
  margin: ${(props) => props.varmargin || "0px"};
  min-height: ${(props) => props.varminheight || "900px"};

  @media (max-width: 1000px) {
    grid: ${(props) => props.vargrid || "innerit"};
  }
  @media (max-width: 500px) {
    grid: ${(props) => props.vargrid || "innerit"};
    display: ${(props) => props.vardisplay || "flex"};
    flex-direction: ${(props) => props.vardirection || "column-reverse"};
  }
`;

export const ColumnImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Containerpresentacion = styled.div`
  width: 80.4%;
  max-width: 1546px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 850px) {
    width: 85%;
    margin: auto;
  }
  @media (max-width: 450px) {
    width: 83%;
    margin: auto;
  }
`;
export const Btn = styled.button`
  background-color: ${(props) => props.varbackgroundcolor || "#B3282D"};
  color: ${(props) => props.varcolortext || "#ffffff"};
  text-transform: ${(props) => props.varuppercase || "uppercase"};
  width: ${(props) => props.varwidth || "auto"};
  font-weight: ${(props) => props.varweight || "500"};
  max-width: ${(props) => props.varmaxwidth || "100%"};
  padding: ${(props) => props.varpadd || "auto"};
  font-size: ${(props) => props.fontsize || "22px"};
  display: flex;
  line-height: ${(props) => props.varlineheight || "130%"};
  text-align: ${(props) => props.varalign || "center"};
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.varmargin || "0px"};
  border-radius: ${(props) => props.varborder || "3px"};
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.4);

  &:hover {
    background-color: ${(props) => props.varbackgroundcolorh || "#00394C"};
    cursor: pointer;
    border: 1px solid black;
  }
  @media (max-width: 550px) {
    width: ${(props) => props.varwidthmovil || "auto"};
  }
`;

export const Containerubicacion = styled.div`
  width: 80%;
  max-width: 1536px;
  min-height: 631px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 850px) {
    width: 85%;
    margin: auto;
  }
  @media (max-width: 550px) {
    width: 90%;
    margin: auto;
  }
`;

export const ConteinerCLEdesarrollo = styled.div`
  width: 100%;
  min-height: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerResultados = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #b3282d, #842023, #842023) no-repeat
    center center fixed;
  @media (max-width: 1000px) {
    padding: 50px 0 50px;
  }
  @media (max-width: 550px) {
  }
`;
export const ContainerContacto = styled.div`
  width: 100%;
  min-height: 248px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    padding: 50px 0 50px;
  }
`;

export const BtnWhatsApp = styled.button`
  position: absolute;
  z-index: 99;
  border: none;
  background: none;
  position: fixed;

	bottom: 40px;
	right: 20px;
  margin: 0px;
	transition: all 300ms ease 0ms;
  padding-top: 15px;
  margin-bottom: 0px;
  &:hover {
  cursor: pointer;
  transform:translate(3px);
	transform: translateY(-7px);
  border-radius: 96%
}
  @media (max-width: 900px) {
    right: 10px;
    bottom: 20px;
  }
`;


