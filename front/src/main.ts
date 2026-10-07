import './style.css'

document.querySelector('#app')!.innerHTML = `
<h1>Excuse Generator</h1>
<button>Generate</button>
<p id="result"></p>
`
async function getExcuse() {
  const fetchResponse = await fetch('http://localhost:3000/excuse');

  if (!fetchResponse.ok) {
    throw new Error(`HTTP error : ${fetchResponse.status}`);
  }
  const data: {excuse: string} = await fetchResponse.json();

  document.querySelector('#result')!.innerHTML = data.excuse;
}

document.querySelector('button')!.addEventListener('click', async () => {
  await getExcuse();
});