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
  @media (max-width: 800px) {
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
  @media (max-width: 800px) {
    font-size: ${(props) => props.fontsizem || "16px"};
    line-height: ${(props) => props.varlineheightm || "20px"};
    text-align: ${(props) => props.varalignm || "center"};
    margin: ${(props) => props.varmarginm || "0px auto"};
    width: ${(props) => props.varwidthm || "auto"};
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
  grid-template-columns: 48.5% 48.5%;
  grid-gap: 3%;
  margin-top: 30px;
  @media (max-width: 1000px) {
    grid-template-columns: 100%;
    grid-gap: 20px;
  }
`;

export const Griditem = styled.div`
  width: 100%;
  min-height: 529px;
  max-height: 529px;
  @media (max-width: 1000px) {
    min-height: 237px;
    max-height: 237px;
  }
`;

export const BtnRed = styled.div`
  background-color: ${(props) => props.backgcolor || "#b3282d"};
  color: ${(props) => props.varcolor || "#FFFFFF"};
  padding: ${(props) => props.varpadding || "8px 10px"};
  margin: ${(props) => props.varmargin || "0px"};
  font-size: ${(props) => props.varfontsize || "16px"};
  font-family: ${(props) => props.varfontfamily || "Montserrat"};
  font-weight: ${(props) => props.varweight || "700"};
  min-width: ${(props) => props.varminwidth || "200px"};
  min-height: 54px;
  border-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 8px rgba(119, 33, 107, 0.2);
  width: ${(props) => props.varwidth || "auto"};
  cursor: pointer;
  :hover {
    transform: translateY(-5%);
  }
  @media (max-width: 900px) {
    margin: ${(props) => props.varmarginm || "0px"};
  }
`;
