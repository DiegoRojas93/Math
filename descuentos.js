const D = document,
      price = D.querySelector('#price'),
      discount = D.querySelector('#discount'),
      P = D.querySelector('#result'),
      btn = D.querySelector('#calcular');

btn.addEventListener('click', calcularPrecioConDescuento)

function calcularPrecioConDescuento() {

    if (!price.value || !discount.value) {
        P.innerText=`Todos los campos deben ser llenados`
        return
    }

    if (discount.value >= 100) {
        P.innerText=`El descuento debe ser menor a 100`
        return
    }

    const newPrice = (price.value * ( 100 - discount.value )) / 100;
    P.innerText=`El nuevo precio es: ${newPrice}`
}