import React from 'react';
import { Columna, Columnas, Title, Roboto} from '../Styled2';
import './FormContacto.scss';

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-content">
        <div>
        <div className="popup-content-items">
          <Columnas
          vardirection="column"
          className='columns-content'
          vardisplaymil="grid"
          >
            <Columna>
              <Title
              varcolor="#ffffff"
              varwidth="84.5%"
              varwidthmil="96%"
              varlineheight="120%"
              varmargin="0 0 20px"
              varmarginmovil="30px 0 10px"
              varalignt="left"
              fontsizem="24px"
              fontsizemil="26px"
              >
                Estámos esperando tu mensaje.
              </Title>
              <Roboto
              varcolor="#f2f5f6"
              fontsize="20px"
              varwidth="62.7%"
              varwidthmovil="100%"
              varlineheight="120%"
              varmarginmovil="0 0 22px"
              varmargin="0 0 70px"
              varwidthmil="96%"
              >
                Dejanos tus datos, pronto nuestros asesores se pondrán en contacto  contigo
              </Roboto>
              <Roboto
              varcolor="#ffffff"
              fontsize="18px"
              varwidth="62.7%"
              varlineheight="120%"
              varmargin="0 0 20px"
              varmarginmovil="0 0 20px"
              >
                Más conexiones
              </Roboto>
              <Columnas
              vargrid="grid"
              vardisplay="grid"
              vardisplaymil="grid"
              className='conexionesgridgap'
              vardirection="column"
              vargridcolumns="25% 25% 25% 25%"
              varwidth="53%"
              varwidthmovil="78%"
              
              >
                <Columna>
                <svg className='conexiones' width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25.8477" cy="25.7046" r="25.6465" fill="white"/>
                <path d="M39.4953 15.2046H12.1953L25.8454 26.448L39.6497 15.2361C39.5992 15.2213 39.5476 15.2108 39.4953 15.2046Z" fill="#B3282D"/>
                <path d="M26.509 28.6194C26.1222 28.9361 25.5656 28.9361 25.1787 28.6194L11.1465 17.0588V35.1546C11.1465 35.7345 11.6166 36.2046 12.1965 36.2046H39.4965C40.0765 36.2046 40.5466 35.7345 40.5466 35.1546V17.2142L26.509 28.6194Z" fill="#B3282D"/>
                </svg>
                </Columna>
                <Columna className='conexiones'>
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="26.1406" cy="25.7046" r="25.6465" fill="white"/>
                <path d="M36.2149 29.4578C34.7455 29.4578 33.3027 29.228 31.9356 28.7762C31.2656 28.5477 30.4421 28.7573 30.0332 29.1773L27.3346 31.2144C24.2051 29.5438 22.2773 27.6167 20.6296 24.5107L22.6067 21.8824C23.1204 21.3694 23.3047 20.62 23.0839 19.9169C22.6302 18.5425 22.3997 17.1005 22.3997 15.6305C22.3998 14.5685 21.5358 13.7046 20.4739 13.7046H16.0664C15.0046 13.7046 14.1406 14.5685 14.1406 15.6304C14.1406 27.8023 24.043 37.7046 36.2149 37.7046C37.2767 37.7046 38.1407 36.8407 38.1407 35.7788V31.3836C38.1406 30.3218 37.2767 29.4578 36.2149 29.4578Z" fill="#B3282D"/>
                </svg>
                </Columna>
                <Columna  className='conexiones' >
                <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="26.4336" cy="25.7046" r="25.6465" fill="white"/>
                <path d="M26.4346 13.7046H26.4286C19.8121 13.7046 14.4316 19.0866 14.4316 25.7046C14.4316 28.3296 15.2776 30.7626 16.7161 32.7381L15.2206 37.1961L19.8331 35.7216C21.7306 36.9786 23.9941 37.7046 26.4346 37.7046C33.0511 37.7046 38.4316 32.3211 38.4316 25.7046C38.4316 19.0881 33.0511 13.7046 26.4346 13.7046ZM33.4171 30.6501C33.1276 31.4676 31.9786 32.1456 31.0621 32.3436C30.4351 32.4771 29.6161 32.5836 26.8591 31.4406C23.3326 29.9796 21.0616 26.3961 20.8846 26.1636C20.7151 25.9311 19.4596 24.2661 19.4596 22.5441C19.4596 20.8221 20.3341 19.9836 20.6866 19.6236C20.9761 19.3281 21.4546 19.1931 21.9136 19.1931C22.0621 19.1931 22.1956 19.2006 22.3156 19.2066C22.6681 19.2216 22.8451 19.2426 23.0776 19.7991C23.3671 20.4966 24.0721 22.2186 24.1561 22.3956C24.2416 22.5726 24.3271 22.8126 24.2071 23.0451C24.0946 23.2851 23.9956 23.3916 23.8186 23.5956C23.6416 23.7996 23.4736 23.9556 23.2966 24.1746C23.1346 24.3651 22.9516 24.5691 23.1556 24.9216C23.3596 25.2666 24.0646 26.4171 25.1026 27.3411C26.4421 28.5336 27.5281 28.9146 27.9166 29.0766C28.2061 29.1966 28.5511 29.1681 28.7626 28.9431C29.0311 28.6536 29.3626 28.1736 29.7001 27.7011C29.9401 27.3621 30.2431 27.3201 30.5611 27.4401C30.8851 27.5526 32.5996 28.4001 32.9521 28.5756C33.3046 28.7526 33.5371 28.8366 33.6226 28.9851C33.7066 29.1336 33.7066 29.8311 33.4171 30.6501Z" fill="#B3282D"/>
                </svg>
                </Columna>
                <Columna  className='conexiones'>
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25.7266" cy="25.7046" r="25.6465" fill="white"/>
                <path d="M16.2149 13.7046C14.3737 13.7046 13.1699 14.9136 13.1699 16.5027C13.1699 18.0566 14.3379 19.3001 16.1442 19.3001H16.1792C18.0564 19.3001 19.2246 18.0566 19.2246 16.5027C19.1895 14.9136 18.0564 13.7046 16.2149 13.7046Z" fill="#B3282D"/>
                <path d="M13.4883 21.511H18.8708V37.7045H13.4883V21.511Z" fill="#B3282D"/>
                <path d="M32.083 21.1311C29.1793 21.1311 27.2323 23.8596 27.2323 23.8596V21.5112H21.8496V37.7047H27.232V28.6616C27.232 28.1775 27.2671 27.6941 27.4093 27.3479C27.7984 26.3812 28.6839 25.3797 30.1709 25.3797C32.1185 25.3797 32.8975 26.8647 32.8975 29.0417V37.7047H38.2796V28.4196C38.2796 23.4457 35.624 21.1311 32.083 21.1311Z" fill="#B3282D"/>
                </svg>
                </Columna>

              </Columnas>
              
            </Columna>

            <Columna>
            <button onClick={props.closePopup} className="cerrar">x</button>

              <form action='#' method='post'>
                <Columnas 
                className='gridgaptext'
                vargridcolumns="46% 47%"
                vargrid="grid"
                vardisplay="grid"
                vardisplaymil="grid"
                vardirection="column"
                >

                  <Columna>
                    <label for="name">Nombre</label>
                    <input type="text" id="name" name="name" required placeholder='Ricardo'></input>
                  </Columna>
                  <Columna>
                    <label for="lastname">Apellido</label>
                    <input type="text" id="lastname" name="lastname" required placeholder='López'></input>
                  </Columna>
                </Columnas>
                
                <Columnas
                vargridcolumns="15% 30% 40%"
                vargridcolumnsmovil="27% 65%"
                className='gridgapnumber'
                vargrid="grid"
                vardisplay="grid"
                vardisplaymil="grid"
                vardirection="column"
                >
                  <Columna>
                    <label for="country">País</label>
                    <input type="number" id="country" name="country" required placeholder='+52'></input>
                  </Columna>
                  <Columna>
                    <label for="phone">Número</label>
                    <input type="number" id="phone" name="phone" required placeholder='55 55 55 55'></input>
                  </Columna>
                  <Columna className='displaynoneemail'>
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder='ricardo@LicenciaAPI.com'></input>
                  </Columna>
                </Columnas>

                <div className='displaynoneemailmovil'>
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder='ricardo@LicenciaAPI.com'></input>
                </div>
                
                <label for="message">¿Quieres dejarnos algún mensaje?</label>
                <textarea id="message" name="message" rows="5" required placeholder='Hola, Estoy interesado en...'></textarea>

                <input type="submit" value="Enviar mensaje"></input>

              </form>
            </Columna>
          </Columnas>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;

