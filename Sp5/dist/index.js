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
    printJoke(response);
    getVote(response);
    // habilitamos botones de voto
    enableBtn();
});
//capturar el click del boton
const getJoke = document.getElementById('getjoke');
getJoke.onclick = fetchApiJoke;
//printar el chiste
const printJoke = (response) => {
    const showjoke = document.getElementById('showjoke');
    showjoke.innerHTML = '<p>' + `${response.joke}` + '</p>';
};
//generar array (reportAcudits)
const btnVotecontainer = document.getElementById('btn-vote-container');
let reportAcudits = [];
const getVote = (response) => {
    btnVotecontainer.onclick = (e) => {
        const newItem = Object.assign({}, reportAcudits[0]);
        newItem.joke = response.joke;
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
    const response = yield window.fetch(' http://api.weatherapi.com/v1/current.json?key=9253095cf0c541748e0115713221301&q=Barcelona', {
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
fetchApiMeteo();
//# sourceMappingURL=index.js.map