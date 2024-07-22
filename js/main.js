let set_id = 1

class Product{
    constructor(name, price) {
        this.name = name
        this.price = price
        this.id = set_id++
    }
}

let products = [
    new Product('Teclado Redragon Kumara', 70000),
    new Product('Monitor ASUS 165hz', 335000),
    new Product('Mouse Logitech G305 Wireless', 90000),
    new Product('RTX 3060 12gb OC version',  420000),
    new Product('Radeon RX580 8gb', 150000),
    new Product('Mother isurus', 290000),
    new Product('Ryzen 7 7700', 457000),
    new Product('Memoria ram 8gb', 40000),
];


let basket = []

let select = prompt("Hola! \n Somos Dosese Hardware, deseas ver nuestra lista de productos? \n Ingrese si o no")

while(select != "si" && select != "no"){
    alert("Por favor ingrese si o no")
    select = prompt("Deseas ver nuestra lista de productos?")
}

if(select == "si"){
    let allProducts = products.map((product) => product.name + " " + "$" + product.price);
    alert(allProducts.join("  -  "))
} else if (select === "no"){
    alert("Nos vemos!")
}

while(select != "no"){
    let product = prompt("Agrega los productos que gustes al carrito de compras ingresando su respectivo numero: \n 1) Teclado Redragon Kumara \n 2) Monitor ASUS 165hz \n 3)Mouse Logitech G305 Wireless\n 4) RTX 3060 12gb OC version\n 5) Radeon RX580 8gb\n 6) Mother isurus\n 7) Ryzen 7 7700 \n 8) Memoria ram 8gb")
    let price = 0

    if(product == "1" || product == "2" || product == "3" || product == "4" || product == "5" || product == "6" || product == "7" || product == "8"){
        switch (product) {
            case "1":
                price = 70000;
                break;
            case "2":
                price = 335000;
                break;
            case "3":
                price = 90000;
                break;
            case "4":
                price = 420000;
                break;
            case "5":
                price = 150000;
                break;
            case "6":
                price = 290000;
                break;
            case "7":
                price = 457000;
                break;
            case "8":
                price = 40000;
                break;
            default:
                break;
        }
    let units = parseInt(prompt("cuantas unidades deseas"))
    basket.push({product, units, price})
    } else {
        alert("No tenemos ese producto")
    }

    select = prompt("deseas seguir comprando?")

    while(select === "no"){
        alert("Gracias por la compra! Nos vemos.")
        basket.forEach((finalBasket) => {
            console.log(`Producto: ${finalBasket.product}, Unidades ${finalBasket.units}, Total a pagar $ ${finalBasket.units * finalBasket.price}`)
        })
        break;
    }
}