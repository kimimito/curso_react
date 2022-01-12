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
    console.log(response);
});
//capturar el click del boton
document.getElementById('showjoke').addEventListener('click', function () {
    console.log("You finally clicked without jQuery");
});
fetchApi();
//# sourceMappingURL=index.js.map