import './style.css'

document.querySelector('#app')!.innerHTML = `
<h1>Excuse Generator</h1>
<button id="generate-btn">Generate</button>
<p id="generated-excuse"></p>
<img id="excuse-image"/>
<button id="generate-again-btn">Another one</button>
`
async function getExcuse() {
  const fetchResponse = await fetch('http://localhost:3000/excuse');

  if (!fetchResponse.ok) {
    throw new Error(`HTTP error : ${fetchResponse.status}`);
  }
  const data: {excuse: string, image: string, sound: string} = await fetchResponse.json();

  document.querySelector('#generated-excuse')!.innerHTML = data.excuse;                       
  document.querySelector<HTMLImageElement>('#excuse-image')!.src = data.image; 
  document.querySelector<HTMLHeadElement>('h1')!.style.display = 'none';
  document.querySelector<HTMLButtonElement>('#generate-btn')!.style.display = 'none';
  document.querySelector<HTMLParagraphElement>('#generated-excuse')!.style.display = 'block';
  document.querySelector<HTMLImageElement>('#excuse-image')!.style.display = 'block';
  document.querySelector<HTMLButtonElement>('#generate-again-btn')!.style.display = 'block';

  new Audio(data.sound).play();
}

document.querySelector('#generate-btn')!.addEventListener('click', async () => {
  await getExcuse();
});

document.querySelector('#generate-again-btn')!.addEventListener('click', async () => {
  await getExcuse();
});