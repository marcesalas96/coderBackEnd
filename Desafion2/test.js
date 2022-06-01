const fs = require('fs');
const Contenedor = require("./Class")
const contenedor = new Contenedor("productos.txt")
const objeto1 = 
    {
    tittle:"Café Brasil Topazio\n",
    price: 500 +"\n",
    thumbnail: "https://www.modobarista.com/product_images/h/955/meli_to-22-min__96503_thumb.jpg\n"
    }
const objeto2 = {
    tittle:"Café Brasil Topazio22",
    price: 6500 +"\n",
    thumbnail: "https://www.modobarista.com/product_images/h/955/meli_to-22-min__96503_thumb.jpg\n"
    } 

const test = async () =>{
    await contenedor.save(objeto1)
    await contenedor.save(objeto2)
    await contenedor.getById(2)
    await contenedor.getById(2)
    await contenedor.getAll()
    await contenedor.deleteById(1)
    await contenedor.getAll()
    await contenedor.deleteAll()
}

test()

