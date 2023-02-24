import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const PageWrapper = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default PageWrapper;
