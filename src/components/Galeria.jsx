import React from "react";

const Galeria = ({ images }) => {
    return (
        <div className="seccion-imagenes">
            {images.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
            ))}
        </div>
    );
};

export default Galeria;