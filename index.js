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
      console.log(data);
      console.log(data.data.content.text_head);
      console.log(data.data.content.text);
      console.log(data.data.content.text_hidden);

      if (data.data.content.text !== "") {
        jokesContainer.innerHTML = `<h2>${data.data.content.text_head}</h2> 
       <br><p>${data.data.content.text}</p>`;
      } else {
        jokesContainer.innerHTML = `<h2>${data.data.content.text_head}</h2> 
       <br><p>${data.data.content.text_hidden}</p>`;
      }
    });
}

// Charger une première blague au chargement de la page
fetchJokes();

// Changer la blague au clic sur la div
jokesContainer.addEventListener("click", () => {
  jokesContainer.classList.add("fade"); // Réduit l'opacité avant de changer la blague
  setTimeout(() => {
    fetchJokes();
    jokesContainer.classList.remove("fade"); // Rétablit l'opacité après le changement
  }, 300);
});
