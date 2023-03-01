import styled from "styled-components";

//Textos
export const Montserrat = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: ${(props) => props.varweight || "400"};
  color: ${(props) => props.varcolor || "#000000"};
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

export const Roboto = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: ${(props) => props.varweight || "400"};
  color: ${(props) => props.varcolor || "#000000"};
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

export const Backgroundbigcontainer = styled.div`
  width: 100%;
  margin: 0%;
  padding: ${(props) => props.varpadding || "0px"};
  background-color: ${(props) => props.varbackgroundcolor || "#ffffff"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Containeramenidades = styled.div`
  width: 87.5%;
  max-width: 1682px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Littleline = styled.div`
  min-height: ${(props) => props.varminheight || "4px"};
  min-width: ${(props) => props.varmaxwidth || "120px"};

  max-width: ${(props) => props.varmaxwidth || "120px"};
  background-color: ${(props) => props.backgroundcolor || "#B3282D"};
`;

export const ComponenteGrecia = styled.div`
  width: 100%;
  min-height: 500px;
  background-color: ${(props) => props.varbackgroundcolor || "green"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Gridwrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 32px;
`;

export const Griditem = styled.div`
  width: 100%;
  min-height: 529px;
  background: ${(props) => props.varbackgroundimage || "green"};
  &:hover {
    background: ${(props) => props.varbackgroundimagehover || "pink"};
  }
`;
