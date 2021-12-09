import React from 'react';
// import fondoPublic from '../images/public-01.jpg';
import Footer from '../components/Footer';
import '../styles/public.css';
const Public = () => {
    return (
        <div className="public">
            <header className="public__header">
                <div className="public__header--tittle">
                    <h1>Proyectos S.A.S</h1>
                </div>
                <div className="public__header--boton">
                    <button className="public__header--boton--centrar">Ingresar</button>
                    <button>Registrarse</button>
                </div>
            </header>
            <div className="public__main">
                <div className="public__contenido">
                    <div className="public__contenido--text">
                        <p>
                            Somos una empresa encargada a la gestion de proyectos tanto de pequeña como de gran escala, además de poder tener todo de menra ordenada, también ofrecemos multiples sistemas para los que requieran una gestión más personalizada.
                        </p>
                        <p>
                            Proporcionamos sistemas especializados, seguimiento y una escalabilidad para que sus proyectos puedan empezar asi no se tenga una clara idea de que tanto recursos necesitará, nuestra infraestructura estará preparada para ello.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ height: "150px", overflow: "hidden" }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100vw" }}>
                    <path d="M-89.72,-7.30 C67.72,266.02 255.08,58.80   499.44,133.80 L497.75,174.25 L-14.10,173.27 Z" style={{ stroke: "none", fill: "#08f" }}></path>
                </svg>
            </div>
            <Footer />
        </div>
    )
}

export default Public
