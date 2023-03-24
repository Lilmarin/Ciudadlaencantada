import React from "react";
import { BtnWhatsApp } from "./Styled2";

let icon = require("../assets/img/CiudadLaEncantada_whatsapp.png");

const WhatsappButton = () => {
  return (
    <BtnWhatsApp>
      <a href="https://www.facebook.com/">
        <img alt="Whatsappcontact" src={icon} />
      </a>
    </BtnWhatsApp>
  );
};

export default WhatsappButton;
