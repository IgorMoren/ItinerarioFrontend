

//Recogemos el campo donde insertaremos lo obtenido del fetch
const HTMLResponse = document.querySelector('#app');

//CONST para formatear el HTML con elementos html
const ul = document.createElement('ul');


//Variables antes de la funcion
let timer;                  //Identificador del timer
let intervalo = 500;        // 0.5 segundo
let miInput = document.getElementById('resultado');

//on keyup comienza la cuenta atras para que ejecute myFunction al 0.5segundos
miInput.addEventListener('keyup', () => {
    clearTimeout(timer);
    if (miInput.value) {
        timer = setTimeout(myFunction, intervalo);
    }
});

/* Trabajemos el cambiar pais */

//INTENTO 1

/*Mediante este intento consiguo modificar el estylo del boton, pero me resulta un codigo muy
poco optimizado */
/* selectSpain.addEventListener( 'click', () =>{
    pais = selectSpain.id;
    console.log(selectSpain);
    selectSpain.className = 'buttonstyle';
    selectPeru.className = '';
    selectArgentina.className = '';
} )

const selectPeru = document.getElementById('peru');

selectPeru.addEventListener( 'click', () =>{
    pais = selectPeru.id;
    selectSpain.className = '';
    selectPeru.className = 'buttonstyle';
    selectArgentina.className = '';
} )

const selectArgentina = document.getElementById('argentina');

selectArgentina.addEventListener( 'click', () =>{
    pais = selectArgentina.id;
    selectSpain.className = '';
    selectPeru.className = '';
    selectArgentina.className = 'buttonstyle';
} ) */


//INTENTO 2
const selectPais = document.getElementsByName('pais');

//Recorre array de paises para que 'escuche' el evento click de cada uno de ellos
/*¿PREGUNTA? Flujo del siguiente fragmento de código, este codigo, esta ejecutandose 
todo el rato y captura cuando se realiza el 'click', o recorre el array de paises al 
hacer click y se queda con el valor capturado? */
for (let i = 0; i < selectPais.length; i++) {

    selectPais[i].addEventListener('click', () => {
        //Obtencion del pais que usaremos en el fetch
        pais = selectPais[i].value;

        let newSelectPais = Array.from(selectPais);
        
        //Nos quedamos con el unico pais que nos interesa para manejar el estilo de los botones
        let result = newSelectPais.filter(item => item == newSelectPais[i]);

        const buttonPais = document.getElementById(pais);

        buttonPais.className = 'buttonstyle';

        /* No consigo optimizarlo mejor, tengo que recorrer de nuevo el array
        para poder modificar el estilo del resto de botones no clickados */
        for (let f = 0; f < selectPais.length; f++) {
            if (result[0] != selectPais[f]) {
                const buttonPaisDisable = document.getElementById(selectPais[f].id);
                buttonPaisDisable.className = '';
            }
        }
    })
}

/* METODO FORMATEAR EL HTML Con elementos de HTML */
/* function myFunction() {
   
    const API_URL = `http://universities.hipolabs.com/search?country=${pais}&name=`;

    var input = document.getElementById('resultado').value;

    HTMLResponse.innerHTML = '';

    fetch(`${API_URL}${input}`)
        .then((response) => {
            response.json()
                .then(data => {

                    data.forEach(element => {
                        let elem = document.createElement('li')
                        elem.appendChild(
                            document.createTextNode(`${element.name}`)
                        );
                        ul.appendChild(elem);
                    });
                    HTMLResponse.appendChild(ul);
                })
        });

} */


// MANERAS FORMATEAR EL HTML:  Creacion del html con string's
function myFunction() {

    var input = document.getElementById('resultado').value;

    //Entra si pais se ha definido, es decir, si ha clickado el pais en el que queremos buscar
    if (typeof pais !== 'undefined') {
        const API_URL = `http://universities.hipolabs.com/search?country=${pais}&name=`;


        HTMLResponse.innerHTML = '';
        //TODO Manejo de errores
        /*Fetch (promise), la construccion del html tiene que ser dentro del fetch.
        Si mal no lo entiendo, promises encadenadas, es decir, ¿tenemos respuesta?->
        json de la respuesta para obtener el formato en el que podemos manejarla. (parse string to json)
        ¿Formato correcto? Una vez que tenemos los datos en formato correcto se recorre con un for
        en el que genera un 'template' con los datos y los va añadiendo (+=) en la
        constante HTMLResponse */
        fetch(`${API_URL}${input}`)
            .then((response) => {
                response.json()
                    .then(data => {
                        //Mediante bucle for
                        /* for (let i = 0; i < data.length; i++) {
    
                            const tpl = `<li> ${data[i]['name']} </li>`;
                            HTMLResponse.innerHTML += `<ul>${tpl}</ul>`;
                            
                        } */
                        //Mediante .map:
                        //TODO La coma intrusa, no consiguo ver donde esta entrando
                        const tpl = data.map((universidad) => `<li> ${universidad.name} </li>`);

                        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;

                    }
                    )
            });
    } else HTMLResponse.innerHTML = `<p> Selecciona el pais de busqueda </p>`;
}
