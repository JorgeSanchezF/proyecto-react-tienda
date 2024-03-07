import React from "react";

export function Lista() {
  const lista = [
    { id: 1, name: "Perro" },
    { id: 2, name: "Gato" },
    { id: 3, name: "Ratón" },
  ];

  return (
    <ul>
      {lista.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}