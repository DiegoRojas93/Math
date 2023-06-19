const D = document,
      price = D.querySelector('#price'),
      coupon = D.querySelector('#coupon'),
      P = D.querySelector('#result'),
      btn = D.querySelector('#calcular');

btn.addEventListener('click', calcularPrecioConDescuento)

function calcular () {
    const newPrice = (price.value * ( 100 - coupon.value )) / 100;

    P.innerText=`El nuevo precio es: ${this.discount}`
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

    // if (!price.value || !coupon.value) {
    //     P.innerText=`Todos los campos deben ser llenados`
    //     return
    // }

    console.log(parameters[0])
    parameters[0].calcular()
    // let discount;

    // switch (coupon.value) {
    //     case `JuanDC_es_Batman`:

    //         discount = 30
    //         calcular(discount)
    //         break;
            
    //     case `no_le_digas_a_nadie`:
                
    //         discount = 25 
    //         calcular(discount)
    //         break;
        
    //     default: P.innerText =`El cupon no es valido`
    //         return;
    // }


}