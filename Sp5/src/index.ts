// codigo que falla (export is not defined) si no descomentas del html (<script>var exports = {};</script>)
// const world = 'world';

// export function hello(world: string ): string {
//   return `Hello ${world}! `;
// }

// hello(world);





//llamada a al api para obtener chiste
const fetchApi = async () => {

  const response = await window.fetch('https://icanhazdadjoke.com', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  }).then((response) => {
    if(response.status === 200){
      return response.json();
    }
  }).catch((response) => {
      return response = 'Sorry, we are experiencing problems, please try again later.';
  });

  console.log(response)
}

//capturar el click del boton
document.getElementById('showjoke').addEventListener('click', function () {
  console.log("You finally clicked without jQuery");
});

fetchApi();