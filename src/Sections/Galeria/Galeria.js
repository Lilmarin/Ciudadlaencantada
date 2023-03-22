import "./Galeria.scss";

import React, { useState } from "react";

function Galeria(props) {
 
  
  const [indice, setIndice] = useState(0);

  return (
    <div className="carrusel .Galeria-Container">
      <img src={props.imagenes[indice]} alt={`Imagen ${indice}`} />
      <div className="botones">
        <button
          onClick={() => setIndice((indice - 1 + props.imagenes.length) % props.imagenes.length)}
        >
          &lt;
        </button>
        <button
          onClick={() => setIndice((indice + 1) % props.imagenes.length)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}



export default Galeria;
