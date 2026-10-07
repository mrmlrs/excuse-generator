import './style.css'

document.querySelector('#app')!.innerHTML = `
<h1>Excuse Generator</h1>
<button>Generate</button>
<p id="generated-excuse"></p>
<img id="excuse-image"/>
`
async function getExcuse() {
  const fetchResponse = await fetch('http://localhost:3000/excuse');

  if (!fetchResponse.ok) {
    throw new Error(`HTTP error : ${fetchResponse.status}`);
  }
  const data: {excuse: string, image: string, sound: string} = await fetchResponse.json();

  document.querySelector('#generated-excuse')!.innerHTML = data.excuse;
  document.querySelector<HTMLImageElement>('#excuse-image')!.src = data.image;
  new Audio(data.sound).play();
}

document.querySelector('button')!.addEventListener('click', async () => {
  await getExcuse();
});