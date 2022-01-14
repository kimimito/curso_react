"use strict";
// codigo que falla (export is not defined) si no descomentas del html (<script>var exports = {};</script>)
// const world = 'world';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// export function hello(world: string ): string {
//   return `Hello ${world}! `;
// }
// hello(world);
//llamada a al api para obtener chiste
const fetchApiJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield window.fetch('https://icanhazdadjoke.com', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then((response) => {
        if (response.status === 200) {
            return response.json();
        }
    }).catch((response) => {
        return response = 'Sorry, we are experiencing problems, please try again later.';
    });
    printJoke(response.joke);
    getVote(response.joke);
    // habilitamos botones de voto
    enableBtn();
});
//llamada a al api para obtener chiste de Chuck Norris
const fetchApiChuckJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield window.fetch('https://api.chucknorris.io/jokes/random', {
        method: 'GET',
    }).then((response) => {
        if (response.status === 200) {
            return response.json();
        }
    }).catch((response) => {
        return response = 'Sorry, we are experiencing problems, please try again later.';
    });
    printJoke(response.value);
    getVote(response.value);
    // habilitamos botones de voto
    enableBtn();
});
//alternar las llamadas de las apis con el click del boton (get joke)
const getJoke = document.getElementById('getjoke');
getJoke.onclick = (e) => {
    if (e.target.dataset.value === '1') {
        fetchApiJoke();
        getJoke.dataset.value = '2';
    }
    else {
        fetchApiChuckJoke();
        e.target.dataset.value = '1';
    }
    fetchApiCat();
};
//printar el chiste
const printJoke = (joke) => {
    const showjoke = document.getElementById('showjoke');
    showjoke.innerHTML = '<p>' + `${joke}` + '</p>';
};
//generar array (reportAcudits)
const btnVotecontainer = document.getElementById('btn-vote-container');
let reportAcudits = [];
const getVote = (joke) => {
    btnVotecontainer.onclick = (e) => {
        const newItem = Object.assign({}, reportAcudits[0]);
        newItem.joke = joke;
        newItem.score = e.target.dataset.score;
        newItem.date = new Date().toISOString();
        reportAcudits.push(newItem);
        disableBtn();
    };
    console.log('reportAcudits', reportAcudits);
};
// inhabilitamos los botones de voto despues de la votacion
let allBtnVote = document.querySelectorAll('.btn-vote');
const disableBtn = () => {
    allBtnVote.forEach((btnVote) => {
        btnVote.disabled = true;
    });
};
// habilitamos botones de voto despues de mostrar chiste
const enableBtn = () => {
    allBtnVote.forEach((btnVote) => {
        btnVote.disabled = false;
        console.log();
    });
};
//llamada a al api para obtener info meteorologica
const fetchApiMeteo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield window.fetch('http://api.weatherapi.com/v1/current.json?key=9253095cf0c541748e0115713221301&q=Barcelona', {
        method: 'GET',
    }).then((response) => {
        if (response.status === 200) {
            return response.json();
        }
    }).catch((error) => {
        return console.log('apiWeather error:', error);
    });
    printMeteo(response);
});
//printamos la info metereologica
const printMeteo = (response) => {
    const showMeteo = document.getElementById('show-meteo');
    showMeteo.innerHTML = '<p><img src="' + `http:${response.current.condition.icon}` + '"/>' + `${response.current.temp_c}°C` + '</p>';
};
// refrescar la info meteorologica
fetchApiMeteo();
//fondo dinamico
const fetchApiCat = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield window.fetch('https://api.thecatapi.com/v1/images/search', {
        method: 'GET',
        headers: {
            'api_key': 'eb7f14d8-2772-4aef-80ef-ac702346b87d',
        },
    }).then((response) => {
        if (response.status === 200) {
            return response.json();
        }
    }).catch((error) => {
        return console.log('apiCat error:', error);
    });
    const bgCat = document.getElementById('bg-cat');
    bgCat.style.backgroundImage = 'url("' + `${response[0].url}` + '")';
});
//# sourceMappingURL=index.js.map