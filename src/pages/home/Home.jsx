import React from 'react';
import imagenIcono from '../../assets/d3177929-c131-46e3-a2d8-cfdedf4f5966.jpg';

const Home = () => {
    return (
        <div>
            <h1>Bienvenido a la página principal</h1>
            <img src={imagenIcono} alt="Icono de la página" className="icono" />
        </div>
    );
};

export default Home;

