//Recogemos el campo donde insertaremos lo obtenido del fetch
const HTMLResponse = document.querySelector('#app');

//CONST para formatear el HTML con elementos html
const ul = document.createElement('ul');


//Variables antes de la funcion
let timer;                  //Identificador del timer
let intervalo = 500;        // 0.5 segundo
let miInput = document.getElementById('resultado');

//on keyup comienza la cuenta atras
miInput.addEventListener('keyup', () => {
    clearTimeout(timer);
    if (miInput.value) {
        timer = setTimeout(myFunction, intervalo);
    }
});

/* Trabajemos el cambiar pais */

//INTENTO 2


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


//INTENTO 1
const selectPais = document.getElementsByName('pais');

for (let i = 0; i < selectPais.length; i++) {


    selectPais[i].addEventListener('click', () => {
        pais = selectPais[i].value;
        // console.log(selectPais);
        let newSelectPais = Array.from(selectPais);
        //console.log(newSelectPais);
        let result = newSelectPais.filter(item => item == newSelectPais[i]);
        //console.log(selectPais[i]);
        console.log(result);
        for (let f = 0; f < selectPais.length; f++) {
            console.log(selectPais[f])
            if (result[0] == selectPais[f]) {
                /* TODO */
                console.log('estamos dentro');
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

    const API_URL = `http://universities.hipolabs.com/search?country=${pais}&name=`;

    var input = document.getElementById('resultado').value;

    HTMLResponse.innerHTML = '';

    fetch(`${API_URL}${input}`)
        .then((response) => {
            response.json()
                .then(data => {
                    for (let i = 0; i < data.length; i++) {

                        const tpl = `<li> ${data[i]['name']} </li>`;
                        HTMLResponse.innerHTML += `<ul>${tpl}</ul>`;
                        console.log(data[i]['name']);

                    }
                })
        });

}
