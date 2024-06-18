import { getAllBooksFromLocalStorage } from "./functions.js";

const detailButtonArray = document.querySelectorAll(".details");
const books = getAllBooksFromLocalStorage();
const popupDetails = document.querySelector(".popup");
const content = document.querySelector(".p-content-text");
document.addEventListener("DOMContentLoaded", () => {
  // Prendre tous les buttons et y ajouter une fonction en cliquant sur chacun
  detailButtonArray.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      const titre = element.getAttribute("titre");
      const book = books.livres.find((u) => u.titre === titre) || {};
      content.innerHTML = getHTML(book);
      popupDetails.style.display = "block";
    });
  });
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".details")) {
    const element = e.target;
    const titre = element.getAttribute("titre");
    const book = books.livres.find((u) => u.titre === titre) || {};
    content.innerHTML = getHTML(book);
    popupDetails.style.display = "block";
  }
});

function getHTML(book) {
  return `
        <h3>${book.titre}</h3>
        <img class='img' src=${book.image}>
        <p><strong>Auteurs: </strong>${book.auteurs}</p>
        <p><strong>Disponible: </strong>${(book.disponibilite =
          book.disponibilite ? "Oui" : "Non")}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
        <p><strong>Date de publication: </strong>${book.date_publication}</p>
        <p><strong>Editeur: </strong>${book.editeurs}</p>
        <p><strong>Resume: </strong>${book.resume}</p>
        <p><strong>langue: </strong>${(book.langue =
          book.langue == "" ? "All" : book.langue)}</p>
        <p><strong>Page: </strong>${book.nombre_page} pages</p>
        <p><strong>isbn: </strong>${book.isbn}</p>
    `;
}

document.querySelector(".p-close").onclick = () => {
  popup.style.display = "none";
};
window.onclick = (e) => {
  if (e.target == popup) {
    popup.style.display = "none";
  }
};
