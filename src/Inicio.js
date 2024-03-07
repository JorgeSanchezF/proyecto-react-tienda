
import { Link } from "react-router-dom"
import Galeria from "./components/Galeria";

export function Inicio() {
  const images = [
    { src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.domestika.org%2Fc_fill%2Cdpr_auto%2Cf_auto%2Cq_auto%2Fv1611859969%2Fcontent-items%2F006%2F908%2F375%2FMANCHITAS-8724-original.jpg%3F1611859969&f=1&nofb=1&ipt=ee1f715d36cda8e6c2d96e12e746c245cab514b04c907c6356b5dd7e9ad95d20&ipo=images", alt: "Image 1" },
    { src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.z86nurg5VEy9ULrYNyQu0wHaE5%26pid%3DApi&f=1&ipt=6911a2e0ca45569d240c2267316449de554bf721154a1a7573eaf727815a739a&ipo=images", alt: "Image 2" },
    { src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.kQxBg9ZfJfen7wQGeJZC1AHaH5%26pid%3DApi&f=1&ipt=29f3946d88e4d7dd4b4df1dd5713b227bc8d5f712e7e28b8325ed2af4bb1237f&ipo=images", alt: "Image 3" },
  ];

  return (
    <div>
      <head>
        <title>Página Inicio</title>
      </head>
      <h1>Bienvenido a la página inicial</h1>
      <Link to="lista">Ir a subpagina lista</Link>

      <Galeria images={images} />
    </div>
  )
}