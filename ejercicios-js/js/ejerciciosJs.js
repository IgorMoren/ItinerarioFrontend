/* Ejercicio JS itinerario front-end */

//Evitar if else y utilizar map filter etc

/* Ejercicio 1 */
/* Dado un array de objetos, obtener el objeto con el id 3 */
const arrNames = [
	{ id: 1, name: "Juan" },
	{ id: 2, name: "Pepe" },
	{ id: 3, name: "Alfredo" },
	{ id: 4, name: "Sandra" },
	{ id: 5, name: "Felisa" },
];
function findId(id) {
	return arrNames.filter((name) => name.id === id);
}

console.log("Ejercicio 1:", findId(3));

/* Ejercicio 2 */
/* Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos) */
const arrDirty = [NaN, 0, 5, false, -1, "", undefined, 3, null, "test"];

function findTruthy() {
	const arrClean = [];
	arrDirty.map((el) => {
		if (el) {
			arrClean.push(el);
		}
	});
	return arrClean;
}

console.log("Ejercicio 2:", findTruthy());

/* Ejercicio 3 */
/* Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales */
const arrCities = [
	{ city: "Logroño", country: "Spain", capital: false },
	{ city: "Paris", country: "France", capital: true },
	{ city: "Madrid", country: "Spain", capital: true },
	{ city: "Rome", country: "Italy", capital: true },
	{ city: "Oslo", country: "Norway", capital: true },
	{ city: "Jaén", country: "Spain", capital: false },
];

function searchCapital(arr) {
	return arr.filter((city) => city.capital === false);
}

console.log("Ejercicio 3:", searchCapital(arrCities));

/* Ejercicio 4 */
/* Dado tres arrays de números, sacar en un nuevo array la intersección de estos. */
const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];

function findIntersect(...arr) {
	array = arr;

	result = array.reduce((a, b) => a.filter((c) => b.includes(c)));

	return result;
}

console.log("Ejercicio 4:", findIntersect(arrNumber1, arrNumber2, arrNumber3));
//La interseccion son los que son iguales, es decir, devolveria 1, 2

/* Ejercicio 5 */
/* Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que sean city y isSpain. El valor de isSpain será un booleano indicando si es una ciudad de España.
Ejemplo: {city: "Logroño", isSpain: "true"} */

const arrCities2 = [
	{ city: "Logroño", country: "Spain", capital: false },
	{ city: "Bordeaux", country: "France", capital: false },
	{ city: "Madrid", country: "Spain", capital: true },
	{ city: "Florence", country: "Italy", capital: true },
	{ city: "Oslo", country: "Norway", capital: true },
	{ city: "Jaén", country: "Spain", capital: false },
];

function locationSpain(arr) {
	return searchCapital(arr.filter((city) => city.country === "Spain")).map(
		({ city: x, isSpain }) => ({ city: x, isSpain: true })
	);
}

console.log("Ejercicio 5:", locationSpain(arrCities2));

/* Ejercicio 6 */
/* Crea una función que redondee un número float a un número específico de decimales. 
La función debe tener dos parámetros: 
Primer parámetro es un número float con x decimales
Según parámetro es un int que indique el número de decimales al que redondear
Ejemplo de uso de la función:
const roundedResult = roundTo(2.123, 2);
console.log(roundedResult); // 2.12 
const roundedResult = roundTo(1.123456789, 6);
console.log(roundedResult); // 1.123457 */

/* Ejercicio 7 */
/* Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.
La fundación debe tener dos parámetros:
Primer parámetro es un objeto con x número de campos y valores
Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro
Ejemplo de uso de la función:
const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
 
console.log(result); // {a: 1, c: 3} */

//hint: Pasarle a una funcion otra funcion

/* Ejercicio 8 */
/* Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
La función debe tener 2 parámetros:
Primer parámetro debe ser el número de bytes
Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.

Ejemplo de uso de la función:
const result = fromBytesToFormattedSizeUnits(1000);
console.log(result); // 1KB
 
const result = fromBytesToFormattedSizeUnits(123456789);
console.log(result); // 123MB
 
const result = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result); // -12.145GB */

//Bastante largo

/* Ejercicio 9 */
/* Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
La función debe tener un objeto como único parámetro.
Ejemplo de uso de la función:
const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' } */

//hint: Formas de recorrer un objeto

/* Ejercicio 10 */
/* Crea una función que elimine las etiquetas html o xml de un string.
La función debe tener un string como único parámetro.
Ejemplo de uso de la función:
const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');
 
console.log(result); // lorem ipsum */
//Uso de reg-ex

/* Ejercicio 11 */
/* Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.
La función debe tener dos parámetros:
El primer parámetro es el array entero que se quiere dividir.
El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida el array original del primer parámetro.
Ejemplo de uso de la función:
const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ] */
//Puede ser que sea largo
