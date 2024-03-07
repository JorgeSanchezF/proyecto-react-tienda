// ObjetoFondoCard.js
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function ObjetoFondoCard() {
    let objeto = {
        name: 'Jorge',
        backgroundColor: 'red'
    }
    return (
        <div>
            <Link to="/" className="link">Ir a inicio</Link>

            <div style={{ backgroundColor: objeto.backgroundColor, padding: "2rem" }}>
                <h2 style={{ color: "white" }}>{objeto.name}</h2>
            </div>
        </div>
    );
}