import { getAllBooksFromLocalStorage, search, getCard } from "./functions.js";

// creer des element <li> et les ajouter en tant que fils de l'element <ul>
document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const books = getAllBooksFromLocalStorage();
  const filterButton = document.querySelector(".filter");

  // ecoute le boutton de recherche et applique le filtre
  filterButton.addEventListener("click", () => {
    const filter = document.querySelector("#value").value;
    const filtered = search(filter);
    if (document.querySelector(".filtered")) {
      document.body.removeChild(document.querySelector(".filtered"));
    }
    const div = document.createElement("div");
    div.setAttribute("class", "filtered");
    div.innerHTML = `<h2>Resultat du filtre<h2>`;
    filtered.forEach((element) => {
      const divF = document.createElement("div");
      divF.innerHTML = getCard(element);
      div.appendChild(divF);
    });
    main.querySelector(".main").style.display = "none";
    main.insertAdjacentElement("beforebegin", div);
  });
  // affiche tous les livres
  books.livres.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = getCard(element);
    main.querySelector(".main").appendChild(li);
  });
});
