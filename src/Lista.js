// Lista.js
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function Lista() {
  const lista = [
    { id: 1, name: "Perro" },
    { id: 2, name: "Gato" },
    { id: 3, name: "Ratón" },
  ];

  return (
    <div className="lista">
      <Link to="/" className="link">Ir a inicio</Link>

      <ul className="lista-items">
        {lista.map((item) => (
          <li key={item.id} className="lista-item">{item.name}</li>
        ))}
      </ul>
    </div>
  );
}