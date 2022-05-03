let intervalo;

let numInic;

let plusMinus = true;

let rapidez = 1000;

function start() {
    document.querySelector('.btn-start').disabled = true;
    document.querySelector('.btn-reset').disabled = true;
    document.querySelector('.btn-stop').disabled = false;
    intervalo = setInterval(function timer() {
        if (plusMinus) {
            let result = getNumero();

            let step = getStep();

            result += step;

            document.getElementById('resultado').innerHTML = result;
        } else if (!plusMinus) {
            let result = getNumero();

            let step = getStep();

            result -= step;

            document.getElementById('resultado').innerHTML = result;
        }
        console.log(rapidez);
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
    clearInterval(intervalo);
}

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


