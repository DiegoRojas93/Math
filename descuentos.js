const D = document,
      price = D.querySelector('#price'),
      coupon = D.querySelector('#coupon'),
      P = D.querySelector('#result'),
      btn = D.querySelector('#calcular');

btn.addEventListener('click', calcularPrecioConDescuento)

function calcular () {
    const newPrice = (price.value * ( 100 - this.discount )) / 100;

    P.innerText=`El nuevo precio es: ${newPrice} debido a que su descuento del copon es de ${this.discount}%`
}

const parameters = [
    {
        id: "JuanDC_es_Batman",
        discount: 30,
        calcular
    },
    {
        id: "no_le_digas_a_nadie",
        discount: 25,
        calcular
    }
]

function calcularPrecioConDescuento() {

    console.log(coupon.value);


    const selectedParameter = parameters.find( ({ id }) => id === coupon.value )

    selectedParameter.calcular()
}