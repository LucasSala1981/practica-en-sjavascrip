function calcPrecConDesc(precio, descuento){

    const porcPrecioConDesc = 100 - descuento;
    const precConDesc = (precio * porcPrecioConDesc) / 100;

    return precConDesc;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcPrecConDesc(priceValue, discountValue);

    const ResultPrice = document.getElementById("ResultPrice");

    ResultPrice.innerText = "El precio a pagar es: $" + precioConDescuento;


}


