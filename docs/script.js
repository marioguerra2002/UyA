//función en javascript en la que se inserte en una tarjeta un texto que el usuario introduce por el teclado
function actualizarTexto() {
    // Obtener el valor del campo de texto
    var nuevoTexto = document.getElementById("texto-input").value;
        
    // Actualizar el texto en la tarjeta
    document.getElementById("texto-tarjeta").innerHTML = nuevoTexto;
}
function contarparrafo() {
    // Contar los párrafos en la página
		var paragraphs = document.getElementsByTagName("p");
		var numParagraphs = paragraphs.length;
		document.getElementById("parrafos").innerHTML = numParagraphs;
		// Contar los elementos div en la página


		// Mostrar el informe en la consola del navegador
		// console.log("Número de párrafos: " + numParagraphs);
		// console.log("Número de items de lista: " + numListItems);
		// console.log("Número de elementos div: " + numDivs);
}
function contarlista() {
		// Contar los items de lista en la página
		var listItems = document.getElementsByTagName("li");
		var numListItems = listItems.length;
		document.getElementById("items").innerHTML = numListItems;
}
function contardiv() {
	var divs = document.getElementsByTagName("div");
	var numDivs = divs.length;
	document.getElementById("divs").innerHTML = numDivs;
}
// El json debe estar en el propio codigo debido a 
// que no se puede acceder a un archivo externo, por 
// lo que se ha creado un json en el mismo codigo
const datosCompra = {
	"dni": "12345678A",
	"anioNacimiento": 1980,
	"numCuenta": "ES1234567890123456789012",
	"productos": [
		{
			"nombre": "Queso",
			"precio": 10
		},
		{
			"nombre": "Jamón",
			"precio": 20
		},
		{
			"nombre": "Pan",
			"precio": 30
		}
	],
	"descuento": 10,
	"modalidadPago": "Credito",
	"fechaPago": "2020-12-31"
};
function calcularImporteCompra() {
	// Calcular el importe de la compra
	var importe = 0;
	for (var i = 0; i < datosCompra.productos.length; i++) {
		importe += datosCompra.productos[i].precio;
	}
	// Calcular el descuento
	if (datosCompra.descuento) {
		importe = importe * (1 - (datosCompra.descuento / 100));
	}
	return Math.round(importe * 100) / 100;
	
}
function mostrarListaProductos() {
	// Mostrar la lista de productos
	var listaProductos = "";
	for (var i = 0; i < datosCompra.productos.length; i++) {
		listaProductos += "<ol>" + datosCompra.productos[i].nombre + ": " + datosCompra.productos[i].precio + "€</ol>";
	}
	document.getElementById("lista-productos").innerHTML = listaProductos;
}
function resultadoCompraYFechaPago() {
	const resultado = calcularImporteCompra();
	
	var fechaPago;
	if (datosCompra.modalidadPago == "Tarjeta") {
		fechaPago = new Date().toLocaleDateString('es-ES');
	} else if (datosCompra.modalidadPago == "Credito") {
		fechaPago = datosCompra.fechaPago;
	}
	document.getElementById("resultado").innerHTML = resultado;
	document.getElementById("fecha-pago").innerHTML = fechaPago;
}
