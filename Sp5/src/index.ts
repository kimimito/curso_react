// codigo que falla (export is not defined) si no descomentas del html (<script>var exports = {};</script>)
// const world = 'world';

// export function hello(world: string ): string {
//   return `Hello ${world}! `;
// }

// hello(world);



//llamada a al api para obtener chiste
const fetchApiJoke = async () => {

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

  printJoke(response);
  getVote(response);

  // habilitamos botones de voto
  enableBtn();

}

//capturar el click del boton
const getJoke = <HTMLInputElement>document.getElementById('getjoke');
getJoke.onclick = fetchApiJoke; 

//printar el chiste
const printJoke = (response: any) => {
  const showjoke = <HTMLInputElement>document.getElementById('showjoke');
  showjoke.innerHTML = '<p>' + `${response.joke}` + '</p>';
}

//generar array (reportAcudits)
const btnVotecontainer = <HTMLInputElement> document.getElementById('btn-vote-container');

let reportAcudits: any = [];

const getVote = (response: any) => {
  btnVotecontainer.onclick = (e: any) => {
    const newItem = {...reportAcudits[0]};
    newItem.joke = response.joke;
    newItem.score = e.target.dataset.score;
    newItem.date = new Date().toISOString();
    reportAcudits.push(newItem);

    disableBtn();
  }
  
  console.log('reportAcudits',reportAcudits)
}

// inhabilitamos los botones de voto despues de la votacion
let allBtnVote: any = document.querySelectorAll('.btn-vote');

const disableBtn = () => {
  allBtnVote.forEach((btnVote: any) => {
    btnVote.disabled = true;
  });
}

// habilitamos botones de voto despues de mostrar chiste
const enableBtn = () => {
  allBtnVote.forEach((btnVote: any) => {
    btnVote.disabled = false;
    console.log()
  });
}

//llamada a al api para obtener info meteorologica
const fetchApiMeteo = async () => {

  const response = await window.fetch(' http://api.weatherapi.com/v1/current.json?key=9253095cf0c541748e0115713221301&q=Barcelona', {
    method: 'GET',
  }).then((response) => {
    if(response.status === 200){
      return response.json();
    }
  }).catch((error) => {
      return console.log('apiWeather error:', error);
  });

  printMeteo(response);

}

//printamos la info metereologica
const printMeteo = (response: any) => {
  const showMeteo = <HTMLInputElement>document.getElementById('show-meteo');
  showMeteo.innerHTML = '<p><img src="'+`http:${response.current.condition.icon}` + '"/>' + `${response.current.temp_c}°C` + '</p>';
}

fetchApiMeteo();