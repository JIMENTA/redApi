const express = require ('express');

const app = express()
// app.use(bodyParse.urlencoded({extended:true}))
// app.use(bodyParse.json())

const pointsInMap =[
    {
        id: 1,
        name: 'Millor que nou',
        web:'http://www.millorquenou.cat/',
        description:'Talleres de reparacion, tienda de intecambio de segunda mano',
        adress:'Carrer Sepúlveda 47',
        lngLat: [2.154582334974559, 41.37749846831138 ],
        cat: ['electrodomesticos','bicicletas', 'otros']
    },
    {
        id: 2,
        name: 'Piel de mariposa',
        web:'https://www.pieldemariposa.es/nueva-tienda-solidaria-piel-de-mariposa-en-barcelona/',
        description:'Conscientes del desconsuelo, incertidumbre y desolación propios de estos primeros momentos, DEBRA Piel de Mariposa existe como única organización de apoyo, para mejorar el día a día de las familias a lo largo de todas las etapas de su vida.',
        adress:'Carrer del Torrent de l Olla 100',
        lngLat: [  2.158469524602895, 41.40154006700783],

        cat:'ropa'
    },
    {
        id: 3,
        name: 'Revendemos',
        web:'',
        description:'Tienda que compra, vende y recupera artículos de segunda mano en efectivo y depósito.',
        adress:'Compte Urgell 81',
        lngLat: [2.1565591484715374, 41.383365755350056],
        cat:'ropa'
    },
    {
        id: 4,
        name: 'Ràpid Noemí',
        web:'https://rapid-noemi-reparacio-de-calcat.negocio.site/',
        description:'Reparació de calçats, cosits, material de sabateria i claus.',
        adress:'Carrer Calàbria 75',
        lngLat: [2.1565228092616784, 41.37843888228303 ],
        cat:'calzados'
    },
    {
        id: 5,
        name: 'Biciclot',
        web:'https://www.biciclot.coop/',
        description:'Somos cooperativa de trabajo , un modelo de economía social centrado en las personas, democrático con vocación de servicio, compromiso social y medioambiental. Promovemos la bicicleta como medio de transporte ecológico, económico, saludable y por una movilidad sostenible .',
        adress:'Carrer Pere IV 58-60',
        lngLat: [2.192392780427652, 41.395838789827266],
        cat: 'bicicleta'
    },
    {
        id: 6,
        name: 'Rescatem',
        web:'https://www.instagram.com/afatrac/',
        description:'Botiga de roba de segona mà, amb una mirada terapèutica i integradora',
        adress:'Carrer Rosselló 459',
        lngLat: [2.174880407994183,41.40675110072827],
        cat:'ropa'
    },
    {
        id: 7,
        name: 'Oxfam',
        web:'',
        description:'Tienda de ropa de segunda mano de intermón oxfam',
        adress:'Calle de Viladomat 43',
        lngLat: [2.16046095343654, 41.37712833518035],
        cat:'ropa'
    },
    {
        id: 8,
        name: 'Taller Biciclo',
        web:'',
        description:'Taller de reparación, restauración y alquiler de bicicletas',
        adress:'Calle de Vilamarí 80',
        lngLat: [2.149422211106629, 41.379333332665645],
        cat:'bicicleta'
    },
    {
        id: 9,
        name: 'Botiga Amiga ',
        web:'https://botigaamiga.org/es/',
        description:'Botiga Amiga és una iniciativa social impulsada per Formació i Treball, entitat promoguda per Càritas Diocesana',
        adress:'Carrer Sibelius 9',
        lngLat: [2.1853974822733773, 41.41055648785793],
        cat:'ropa'
    },
    
];

app.get('/', (req , res) => {
    res.send ('Data Red API');
});

app.get('/api/points', (req, res) => {
    res.send(pointsInMap)
});

app.get('/api/points/:id', (req, res) => {
    const place = pointsInMap.find( point => point.id === parseInt(req.params.id));
    if(!place) return res.status(404).send('Espacio no encontrado');
    res.send(place)
});

app.get('/api/point/:name', (req, res) => {
    const place = pointsInMap.find( point => point.name === req.params.name);
    if(!place) return res.status(404).send('Espacio no encontrado');
    res.send(place)
});

app.post('/api/points', (req, res) => {
    const place = {
        id: pointsInMap.length +1,
        name : req.body.name,
        web : req.body.web,
        description : req.body.description,
        adress : req.body.adress,
        cat : req.body.cat
    };
    pointsInMap.push(place);
    res.send(place)
})

app.delete('/api/points/:id', (req, res) => {
    const place = pointsInMap.find( point => point.id === parseInt(req.params.id));
    if(!point) return res.status(404).send('Espacio no encontrado');

    const index = pointsInMap.indexOf(place);
    pointsInMap.splice(index, 1);
    res.send(place)

})

const port = process.env.port || 4200;
app.listen(port, () => console.log(`Listen in port ${port}`))