import { getAllBooksFromLocalStorage, search } from "./functions.js";

// Obtenir toutes les livres dans le fichier ../data/books.json et les renvoyer comme des objets en notation json
const getAllBooks = async () => {
  try {
    const res = await fetch("/data/books.json");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
// creer des element <li> et les ajouter en tant que fils de l'element <ul>
document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const books = getAllBooksFromLocalStorage();
  const filterButton = document.querySelector(".filter");
  filterButton.addEventListener("click", () => {
    let filter = document.querySelector("#value").value;
    let filtered = "";
    filtered = search(filter);
    filter = "";
    const div = document.createElement("div");
    div.innerHTML = `<h2>Resultat du filtre<h2>`;
    filtered.forEach((element) => {
      const divF = document.createElement("div");
      divF.innerHTML = `
        <h3>${element.titre ? element.titre : ""}</h3>
        <img class='img' src=${element.image}>
        <p>${element.resume}</p>
        <p>Genre: ${element.genre}</p>
        <p>Date de publication: ${element.date_publication}</p>
        <button titre="${element.titre}" class="details">Details</button></a>
      `;
      div.appendChild(divF);
    });
    main.querySelector(".main").style.display = "none";
    main.insertAdjacentElement("beforebegin", div);
  });
  books.livres.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <h3>${element.titre ? element.titre : ""}</h3>
        <img class='img' src=${element.image}>
        <p>${element.resume}</p>
        <p>Genre: ${element.genre}</p>
        <p>Date de publication: ${element.date_publication}</p>
        <button titre="${element.titre}" class="details">Details</button></a>
      `;
    main.querySelector(".main").appendChild(li);
  });
});
