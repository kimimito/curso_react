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

  printJoke(response);
  getVote(response);

  // habilitamos botones de voto
  vote1.disabled = false; 
  vote2.disabled = false;
  vote3.disabled = false;

}

//capturar el click del boton
const getJoke = <HTMLInputElement>document.getElementById('getjoke');
getJoke.onclick = fetchApi; 

//printar el chiste
const printJoke = (response: any) => {
  const showjoke = <HTMLInputElement>document.getElementById('showjoke');
  showjoke.innerHTML = '<p>' + `${response.joke}` + '</p>';
}

//generar array (reportAcudits)
const vote1 = <HTMLInputElement> document.getElementById('vote-1');
const vote2 = <HTMLInputElement> document.getElementById('vote-2');
const vote3 = <HTMLInputElement> document.getElementById('vote-3');
const allBtnVote = <HTMLInputElement> document.getElementById('btn-vote');


let reportAcudits: any = [];

const getVote = (response: any) => {
  vote1.onclick = () => {
    const newItem = {...reportAcudits[0]};
    newItem.joke = response.joke;
    newItem.score = 1;
    newItem.date = new Date().toISOString();
    reportAcudits.push(newItem);
  }
  vote2.onclick = () => {
    const newItem = {...reportAcudits[0]};
    newItem.joke = response.joke;
    newItem.score = 2;
    newItem.date = new Date().toISOString();
    reportAcudits.push(newItem);
  }
  vote3.onclick = () => {
    const newItem = {...reportAcudits[0]};
    newItem.joke = response.joke;
    newItem.score = 3;
    newItem.date = new Date().toISOString();
    reportAcudits.push(newItem);
  }

  console.log('reportAcudits',reportAcudits)
}

allBtnVote.onclick = () => { //inhabilitamos los botones despues de votacion
  vote1.disabled = true;
  vote2.disabled = true;
  vote3.disabled = true;
}