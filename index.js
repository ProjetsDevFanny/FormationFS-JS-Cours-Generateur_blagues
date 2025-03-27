// 1 - Tester le lien de l'API dans le navigateur
// https://api.blablagues.net/?rub=blagues

let jokes = [];

// Vérifier la qualité de la réponse:
fetch("https://api.blablagues.net/?rub=blagues").then((response) => {
  console.log(response);
});

// Fonction pour aller chercher les données de l'API
async function fetchJokes() {
  await fetch(`https://api.blablagues.net/?rub=blagues`)
    .then((res) => res.json()) // On transforme la réponse en JSON
    .then((data) => {
      jokes = data; // Stocke les données API dans "countries"
      console.log(jokes); // toujours ce garder l'objet ouvert dans la console
      // jokesDisplay(); // ⬅️ On appelle cette fonction après avoir reçu les données
    })
    .catch((error) =>
      console.error("Erreur lors de la récupération des blagues :", error)
    ); // Gestion des erreurs
}

fetchJokes();

// Fonction d'affichage de l'API
const jokesDisplay = () => {

  // Génération du HTML
  countriesContainer.innerHTML = filteredCountries
    .map(
      (country) => `
    <div class="card">
          <img src="${country.flags.svg}" alt="Drapeau de ${
        country.translations.fra.common
      }">
      <h2>${country.translations.fra.common}</h2>
      <h3>${country.capital ? country.capital[0] : "Aucune capitale"}</h3>
      <p>Population : ${country.population.toLocaleString(
        "fr-FR"
      )} habitants</p>
      </div>
    `
     
    )
    .join(""); 


}
