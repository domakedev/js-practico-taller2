const calcularPreciofinal = () => {
    let precioInicial = document.querySelector('#dataIn__precioOriginal').value
    let descuento = document.querySelector('#dataIn__descuento').value

    let precioFinal

    if (precioInicial && descuento<=100) {
        precioFinal = precioInicial*((100-descuento)/100)
        printInitialPrice(precioInicial)
        printResult(precioFinal)
        printDiscount(descuento)
    } else if (descuento>=100){
        printResult("Demasiado %")
    } else {
        printResult("Faltan datos")
    }
}

const printResult = (info) => {
    let preciofinalNode = document.querySelector('.card__precioFinal')

    preciofinalNode.textContent = `Precio final:${info}`
}

const printDiscount = (discount) => {
    let discountNode = document.querySelector('.card__descuento')

    discountNode.textContent = `-${discount}%`
}

const printInitialPrice = (iprice) => {
    let priceInicial = document.querySelector('.card__precioInicial')

    priceInicial.textContent = `Precio inicial:${iprice}`
}
