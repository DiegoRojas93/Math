const D = document,
      price = D.querySelector('#price'),
      coupon = D.querySelector('#coupon'),
      P = D.querySelector('#result'),
      btn = D.querySelector('#calcular');

btn.addEventListener('click', calcularPrecioConDescuento)

function descuento () {
    const newPrice = (price.value * ( 100 - this.discount )) / 100;

    P.innerText=`El nuevo precio es: ${newPrice} debido a que su descuento del cupon es de ${this.discount}%`
}

const parameters = [
    {
        id: "JuanDC_es_Batman",
        discount: 30,
    },
    {
        id: "no_le_digas_a_nadie",
        discount: 25,
    }
]

function calcularPrecioConDescuento() {

    if ( !coupon.value || !price.value ) {
        P.innerText=`Completa todos los parametros para hacer el calculo`
        return
    }

    const selectedParameter = parameters.find( ({ id }) =>  id === coupon.value )

    typeof selectedParameter === 'undefined'
        ? P.innerText = `El cupon no es valido`
        : descuento.call(selectedParameter)
}