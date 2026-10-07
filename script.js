/* =========================
   TAMANHO DA FONTE
   ========================= */

let tamanhoFonteAtual = 16;

const valorAdicionado = 2;
const valorSubtraido = 2;


/* Botões */

const btnAumentaTexto =
    document.getElementById("btnAumentaTexto");

const btnDiminuiTexto =
    document.getElementById("btnDiminuiTexto");


/* Aumentar fonte */

function aumentaFonte() {

    if (tamanhoFonteAtual < 26) {

        tamanhoFonteAtual =
            tamanhoFonteAtual + valorAdicionado;

        document.documentElement.style.fontSize =
            tamanhoFonteAtual + "px";
    }
}


/* Diminuir fonte */

function diminuiFonte() {

    if (tamanhoFonteAtual > 12) {

        tamanhoFonteAtual =
            tamanhoFonteAtual - valorSubtraido;

        document.documentElement.style.fontSize =
            tamanhoFonteAtual + "px";
    }
}


/* Eventos dos botões */

btnAumentaTexto.addEventListener(
    "click",
    aumentaFonte
);

btnDiminuiTexto.addEventListener(
    "click",
    diminuiFonte
);


/* =========================
   MODAL DE AJUDA
   ========================= */

const modalAjuda =
    document.getElementById("modalAjuda");

const btnAbrirAjuda =
    document.getElementById("btnAbrirAjuda");

const btnFecharAjuda =
    document.getElementById("btnFecharAjuda");


/* Abrir */

btnAbrirAjuda.addEventListener(
    "click",
    function () {

        modalAjuda.style.display = "block";

    }
);


/* Fechar */

btnFecharAjuda.addEventListener(
    "click",
    function () {

        modalAjuda.style.display = "none";

    }
);


/* Fechar clicando fora */

modalAjuda.addEventListener(
    "click",
    function (event) {

        if (event.target === modalAjuda) {

            modalAjuda.style.display = "none";

        }

    }
);


/* Fechar com ESC */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            modalAjuda.style.display = "none";

        }

    }
);


/* =========================
   LEITURA EM VOZ ALTA
   ========================= */

let lendo = false;


const btnVoz =
    document.getElementById("btnVoz");

const btnParar =
    document.getElementById("btnParar");


/* Iniciar leitura */

btnVoz.addEventListener(
    "click",
    lerEmVozAlta
);


function lerEmVozAlta() {

    /*
       Se já estiver lendo,
       não inicia outra leitura.
    */

    if (lendo === true) {
        return;
    }


    /*
       Cancela qualquer leitura
       anterior.
    */

    speechSynthesis.cancel();


    /*
       Seleciona o conteúdo principal.
    */

    const conteudo =
        document.querySelector("main");


    const texto =
        conteudo.innerText;


    /*
       Cria a fala.
    */

    const fala =
        new SpeechSynthesisUtterance(texto);


    fala.lang = "pt-BR";

    fala.rate = 0.9;

    fala.pitch = 1;


    /*
       Quando terminar.
    */

    fala.onend = function () {

        finalizarLeitura();

    };


    /*
       Se ocorrer erro.
    */

    fala.onerror = function () {

        finalizarLeitura();

    };


    lendo = true;


    speechSynthesis.speak(fala);
}


/* =========================
   PARAR LEITURA
   ========================= */

btnParar.addEventListener(
    "click",
    pararLeitura
);


function pararLeitura() {

    speechSynthesis.cancel();

    lendo = false;
}


/* =========================
   FINALIZAR LEITURA
   ========================= */

function finalizarLeitura() {

    lendo = false;
}


/* =========================
   PAUSAR / CONTINUAR
   ========================= */

/*
   Clique duas vezes no botão
   "Ouvir Página" para pausar
   ou continuar.
*/

btnVoz.addEventListener(
    "dblclick",
    function () {

        if (speechSynthesis.speaking) {

            if (speechSynthesis.paused) {

                speechSynthesis.resume();

            } else {

                speechSynthesis.pause();

            }

        }

    }
);
