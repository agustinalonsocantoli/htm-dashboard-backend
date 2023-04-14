const remeras = [
    {
        talla: 'xs',
        color: 'blanca',
        img: 'www.google.com',
        marca: 'billa'
    },
    {
        talla: 'xs',
        color: 'blanca',
        img: 'www.google.com',
        marca: 'billa'
    },
    {
        talla: 'xs',
        color: 'blanca',
        img: 'www.google.com',
        marca: 'billa'
    },
    {
        talla: 'xs',
        color: 'blanca',
        img: 'www.google.com',
        marca: 'billa'
    },
    {
        talla: 'xs',
        color: 'blanca',
        img: 'www.google.com',
        marca: 'billa'
    },
    {
        talla: 'xs',
        color: 'blanca',
        img: 'www.google.com',
        marca: 'billa'
    },    {
        talla: 'xs',
        color: 'blanca',
        img: 'www.google.com',
        marca: 'billa'
    }
]

remeras.map(item => {
    console.log(`
        <h1>Remera marca ${item.marca}</h1>
        <p>COLOR ${item.color}</p>
    `);
})