import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const PageWrapper = (props) => {
  const scrollHome = () => {
    setTimeout(() => {
      props.executeScroll();
    }, 1000);
  };
  return (
    <React.Fragment>
      <Header
        backgroundImage={props.backgroundImage}
        handleClick={props.handleClick}
        executeScroll={scrollHome}
        selectedOption={props.selectedOption}
      />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default PageWrapper;
