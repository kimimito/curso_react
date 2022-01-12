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
const fetchApi = () => __awaiter(void 0, void 0, void 0, function* () {
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
    vote1.disabled = false;
    vote2.disabled = false;
    vote3.disabled = false;
});
//capturar el click del boton
const getJoke = document.getElementById('getjoke');
getJoke.onclick = fetchApi;
//printar el chiste
const printJoke = (response) => {
    const showjoke = document.getElementById('showjoke');
    showjoke.innerHTML = '<p>' + `${response.joke}` + '</p>';
};
//generar array (reportAcudits)
const vote1 = document.getElementById('vote-1');
const vote2 = document.getElementById('vote-2');
const vote3 = document.getElementById('vote-3');
const allBtnVote = document.getElementById('btn-vote');
let reportAcudits = [];
const getVote = (response) => {
    vote1.onclick = () => {
        const newItem = Object.assign({}, reportAcudits[0]);
        newItem.joke = response.joke;
        newItem.score = 1;
        newItem.date = new Date().toISOString();
        reportAcudits.push(newItem);
    };
    vote2.onclick = () => {
        const newItem = Object.assign({}, reportAcudits[0]);
        newItem.joke = response.joke;
        newItem.score = 2;
        newItem.date = new Date().toISOString();
        reportAcudits.push(newItem);
    };
    vote3.onclick = () => {
        const newItem = Object.assign({}, reportAcudits[0]);
        newItem.joke = response.joke;
        newItem.score = 3;
        newItem.date = new Date().toISOString();
        reportAcudits.push(newItem);
    };
    console.log('reportAcudits', reportAcudits);
};
allBtnVote.onclick = () => {
    vote1.disabled = true;
    vote2.disabled = true;
    vote3.disabled = true;
};
//# sourceMappingURL=index.js.map