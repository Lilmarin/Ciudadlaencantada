import styled from "styled-components";

//Textos
export const Montserrat = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: ${(props) => props.varweight || "400"};
  color: ${(props) => props.varcolor || "#3D3D3D"};
  font-size: ${(props) => props.fontsize || "20px"};
  display: flex;
  line-height: ${(props) => props.varlineheight || "1em"};
  text-align: ${(props) => props.varalign || "center"};
  align-items: center;
  margin: ${(props) => props.varmargin || "0px"};
  max-width: ${(props) => props.varmaxwidth || "auto"};
  width: ${(props) => props.varwidth || "auto"};
  @media (max-width: 100px) {
    font-size: ${(props) => props.fontsizem || "16px"};
  }
`;

//Botones
export const CLE_Button = styled.div`
  background-color: pink;
`;

//contenedores
