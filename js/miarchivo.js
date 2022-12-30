//-------------------------------------------------------------------------------------------//
function pregunta (){ 
    let cantidad = Number(prompt("Cuantos productos desea comprar?"))
    return cantidad
}
//-------------------------------------------------------------------------------------------//
function sumaDeProductos(pesos, cantidadDeProductos) {
    for (let i = 1; i <= cantidadDeProductos; i++) {
        valorProducto = Number(prompt("Ingrese el valor del producto nro " + i + ":"))
        pesos = pesos + valorProducto
    }
    return pesos
}
//-------------------------------------------------------------------------------------------//
function pago (compraFinal, compraTotalConIva) {
    let tipoPago = Number(prompt("El total de la compra es de: $" + compraFinal + " sin IVA \n\
El total de la compra es de: $" + compraTotalConIva + " con IVA \n\
Como desea abonar? Seleccione:\n\
1- Debito-transferencia (10% de descuento) \n\
2- Tarjeta de credito (con recargo)"))
    return tipoPago
}
//-------------------------------------------------------------------------------------------//
function cuotas(compraTotalConIva) {
    let tipoCuota = Number(prompt("Ingrese el numero de cuotas con el que desea abonar: \n\
    1-  Cuota:  5% de interes \n\
    3-  Cuotas: 10% de interes \n\
    6-  Cuotas: 15% de interes \n\
    12- Cuotas: 20% de interes" ))
    let compraMontoCuota = (montoCompraCuotas, interes) => montoCompraCuotas + (montoCompraCuotas * interes)
    switch (tipoCuota) {
        case 1:
            alert("Ud. va a abonar: $" + compraMontoCuota(compraTotalConIva, 0.05) + " en " + tipoCuota + " cuota" + "\n\
Sera redireccionado a CoderPAGO, gracias por comprar en CODERHOUSE")
            break;
        case 3:
            alert("Ud. va a abonar: $" + compraMontoCuota(compraTotalConIva, 0.10) + " en " + tipoCuota + " cuotas"+ "\n\
Sera redireccionado a CoderPAGO, gracias por comprar en CODERHOUSE")
            break;
        case 6:
            alert("Ud. va a abonar: $" + compraMontoCuota(compraTotalConIva, 0.15) + " en " + tipoCuota + " cuotas" + "\n\
Sera redireccionado a CoderPAGO, gracias por comprar en CODERHOUSE")
            break;  
        case 12:
            alert("Ud. va a abonar: $" + compraMontoCuota(compraTotalConIva, 0.20) + " en " + tipoCuota + " cuotas"+ "\n\
Sera redireccionado a CoderPAGO, gracias por comprar en CODERHOUSE")
            break;          
        default:
            break;
    }
    return
}

alert("Bienvenido a nuestra pagina") //INICIO DE LA PAGINA
let pesos = 0
let cantidadDeProductos = pregunta() //PREGUNTA CUANTOS PRODUCTOS VA A COMPRAR
let compraFinal = sumaDeProductos(pesos, cantidadDeProductos) //SUMA TOTAL DE LOS PRODUCTOS
const calcularIva = (compraSinIva) => {return compraSinIva + (compraSinIva * 0.21)} //FUNCION QUE CALCULA IVA
let compraTotalConIva = calcularIva (compraFinal) //CALCULA EL TOTAL DE LA COMPRA CON IVA

let tipoCompra
do {                                   //ACA MUESTRA EL TOTAL DE LA COMPRA Y SELECCION MODO DE PAGO
    tipoCompra = pago(compraFinal, compraTotalConIva)
    switch (tipoCompra) {
        case 1:
            let compraConDescuento = compraTotalConIva - (compraTotalConIva * 0.10)
            alert("Felicitaciones Ud. va a abonar: $" + compraConDescuento + "\n\
Sera redireccionado a CoderPAGO, gracias por comprar en CODERHOUSE")
            break;
        case 2:
            cuotas(compraTotalConIva)
            break;
        default:
            alert("Por favor ingrese un numero valido")
    }
} while  ((tipoCompra != 1) && (tipoCompra != 2));

