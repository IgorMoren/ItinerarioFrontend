let intervalo;

let numInic;

// Esta variable controla si la funcion start() sumara o restara
let plusMinus = true;

let rapidez = 1000;



function start() {
    //Manejo del estado de los botones capturados con querySelector
    document.querySelector('.btn-start').disabled = true;
    document.querySelector('.btn-reset').disabled = true;
    document.querySelector('.btn-stop').disabled = false;
    //setInterval ejecutara la funcion timer() cada "rapidez" ms
    intervalo = setInterval(function timer() {
        //Entrara en una condicion u otra segun
        if (plusMinus) {
            //Captura del valor de resultado
            let result = getNumero();
            //Captura del valor de los steps indicados en el input type number
            let step = getStep();

            result += step;

            document.getElementById('resultado').innerHTML = result;
        } else if (!plusMinus) {
            let result = getNumero();

            let step = getStep();

            result -= step;

            document.getElementById('resultado').innerHTML = result;
        }
    }, rapidez);

}

function getNumero() {
    numInic = parseInt(document.getElementById('resultado').innerHTML);

    return numInic;
}

function getStep() {

    let step = parseInt(document.getElementById('step').value);

    return step;
}

function getStarter() {

    let starter = parseInt(document.getElementById('numero-base').value)

    return starter
}

function stop() {
    document.querySelector('.btn-start').disabled = false;
    document.querySelector('.btn-reset').disabled = false;
    document.querySelector('.btn-stop').disabled = true;
    
    /* clearInterval() para la ejecucion de la funcion set interval asociada a 
    la variable intervalo */
    clearInterval(intervalo);
}

/* reset() establece la variable del campo resultado al valor de numero-base 
para que el contador lo setee en ese valor */
function reset() {
    document.getElementById('resultado').innerHTML = getStarter();
}

function plus() {
    plusMinus = true;

    return plusMinus;
}

function minus() {
    plusMinus = false;

    return plusMinus;
}


