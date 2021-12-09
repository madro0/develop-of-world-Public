import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__redes">
                <p>Siguenos en nuestras redes</p>
                <div className="footer__redes--iconos">
                    <figure>
                        <i className='bx bxl-facebook-square' style={{ color: "#005dff" }}></i>
                    </figure>
                    <figure>
                        <i className="fa fa-instagram" id="insta" aria-hidden="true"></i>
                    </figure>
                    <figure>
                        <i className='bx bxl-discord' style={{ color: '#132aec' }}></i>
                    </figure>
                </div>
            </div>

            <div className="footer__info">
                <p><b>Contacto: </b>proyectSAS@gmail.com</p>
                <p><b>Medellin-Colombia</b></p>
            </div>

            <div className="footer__copi">
                <p>Derechos reservados <b>© 2021 Proyect S.A.S</b></p>
            </div>
        </div>
    )
}

export default Footer
