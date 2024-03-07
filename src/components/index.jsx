import a from '../../public/img';
function index() {
    let juegos = [{
        nombre: 'Rule the Waves 3',
        precio: 39.99,
        img: 'rulethewaves3'
    }, {
        nombre: 'Helldivers 2',
        precio: 39.99,
        img: 'helldivers2'
    },
    {
        nombre: 'Pacific Drive',
        precio: 19.99,
        img: 'pacificdrive'
    }, {
        nombre: 'Rule the Waves 3',
        precio: 39.99,
        img: 'rulethewaves'
    }
    ];
    for (const juego in juegos) {
        let contenedor = document.getElementsByClassName('contenedor-cards');
        let card = document.createElement('div');
        let nombre = document.createElement('p');
        let precio = document.createElement('p');
        let imagen = document.createElement('img');
        nombre.textContent = juego.nombre;
        precio.textContent = juego.precio;
        imagen.src = '../../public/img/' + juego.img + '.jpg';

        card.appendChild(imagen);
        card.appendChild(nombre);
        card.appendChild(precio);

        contenedor.appendChild(card);
    }


    return (
        <div className="index">
            <head>
                <title>Bienvendio a La tienda</title>
            </head>

            <body>
                <div className="contenedor-cards">
                </div>
            </body>
        </div>
    );
}