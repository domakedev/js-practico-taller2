const calcularPreciofinalBTN = () => {
    let precioInicial = document.querySelector('#dataIn__precioOriginal').value
    let descuento = document.querySelector('#dataIn__descuento').value
    let cupon= document.querySelector('#dataIn__cupon').value

    let precioFinal

    if (precioInicial && descuento<=100) {

        switch (cupon) {
            case "lunes":
                descuento = descuento + 10
                break;
            case "loki":
                descuento = descuento + 20
                break;
            case "wendy":
                descuento = descuento + 30
                break;               
            default:
                descuento = descuento
                break;
        }

        precioFinal = precioInicial*((100-descuento)/100)
        printInitialPrice(precioInicial)
        printResult(precioFinal)
        printDiscount(descuento)
    } else if (descuento>=100){
        printAlert("Demasiado Descuento")
    } else {
        printAlert("Faltan datos")
    }
}

const printResult = (info) => {
    let preciofinalNode = document.querySelector('.card__precioFinal')

    preciofinalNode.textContent = `Precio final: ${info.toFixed(2)}🎉`
}

const printAlert = (info) => {
    let preciofinalNode = document.querySelector('.card__precioFinal')

    preciofinalNode.textContent = info+"❗"
}

const printDiscount = (discount) => {
    let discountNode = document.querySelector('.card__descuento')

    discountNode.textContent = `-${discount}%`
}

const printInitialPrice = (iprice) => {
    let priceInicial = document.querySelector('.card__precioInicial')

    priceInicial.textContent = `Precio inicial:${iprice}`
}
