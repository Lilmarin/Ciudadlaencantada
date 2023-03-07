import styled from "styled-components";

//Textos

export const Roboto = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: ${(props) => props.varweight || "400"};
  color: ${(props) => props.varcolor || "#4F4F4F"};
  font-size: ${(props) => props.fontsize || "22px"};
  display: flex;
  line-height: ${(props) => props.varlineheight || "130%"};
  text-align: ${(props) => props.varalign || "left"};
  align-items: center;
  margin: ${(props) => props.varmargin || "0px"};
  max-width: ${(props) => props.varmaxwidth || "auto"};
  width: ${(props) => props.varwidth || "auto"};
  padding: ${(props) => props.varpadd || "auto"};
  @media (max-width: 500px) {
    font-size: ${(props) => props.fontsizem || "18px"};
  }
`;

//Botones
export const CLE_Button = styled.div`
  background-color: pink;
`;

//contenedores

export const ComponenteGrecia = styled.div`
  width: 100%;
  min-height: 500px;
  background-color: ${(props) => props.varbackgroundcolor || "green"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Containerinfraestructura = styled.div`
  width: 89.4%;
  max-width: 1709px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 850px) {
    width: 90%;
  }
`;

export const Columnas = styled.div`
  width: 100%; max-width:100%;
  display: grid;
  grid-template-columns: ${(props) => props.vargridcolumns || "50% 50%"};
  grid-gap: ${(props) => props.vargridgap || "15px"};
  justify-content: ${(props) => props.varjustifycontent || "center"};
  align-items: ${(props) => props.varalignitems || "auto"};
  margin: ${(props) => props.varmargin || "0px"};
  min-height: ${(props) => props.varminheight || "0px"};
  
  @media (max-width: 850px) {
    grid: ${(props) => props.vargrid || "innerit"};
  }
  @media (max-width: 500px) {
    grid: ${(props) => props.vargrid || "innerit"};
    display: ${(props) => props.vardisplay || "flex"};
    flex-direction: ${(props) => props.vardirection || "column-reverse"};
  }
  
`;

export const Columna = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
`;



