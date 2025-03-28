// 1 - Tester le lien de l'API dans le navigateur
// https://api.blablagues.net/?rub=blagues

const jokesContainer = document.querySelector(".app");

// Vérifier la qualité de la réponse:
fetch("https://api.blablagues.net/?rub=blagues").then((response) => {
  console.log(response);
});

// Fonction pour aller chercher les données de l'API

async function fetchJokes() {
  await fetch(`https://api.blablagues.net/?rub=blagues`)
    .then((res) => res.json()) // On transforme la réponse en JSON

    .then((data) => {
      console.log(data.data.content.text_head);
      jokesContainer.innerHTML = `<h2>${data.data.content.text_head}</h2> 
    <p>${data.data.content.text_hidden}</p>`;
    });
}

fetchJokes();
