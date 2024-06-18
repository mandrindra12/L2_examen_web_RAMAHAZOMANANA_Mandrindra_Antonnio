import { getAllBooksFromLocalStorage, getHTMLDetails } from "./functions.js";

document.addEventListener("DOMContentLoaded", () => {
  const detailButtonArray = document.querySelectorAll(".details");
  const books = getAllBooksFromLocalStorage();
  const popupDetails = document.querySelector(".popup");
  const content = document.querySelector(".p-content-text");
  // Prendre tous les buttons et y ajouter une fonction en cliquant sur chacun
  detailButtonArray.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      const titre = element.getAttribute("titre");
      const book = books.livres.find((u) => u.titre === titre) || {};
      content.innerHTML = getHTMLDetails(book);
      popupDetails.style.display = "block";
    });
  });

  // rattache un eventListner en cas de click sur un nouveau livre filtre dynamiquement
  document.addEventListener("click", (e) => {
    if (e.target.matches(".details")) {
      const element = e.target;
      const titre = element.getAttribute("titre");
      const book = books.livres.find((u) => u.titre === titre) || {};
      content.innerHTML = getHTMLDetails(book);
      popupDetails.style.display = "block";
    }
  });

  // fermeture du popup
  document.querySelector(".p-close").onclick = () => {
    popup.style.display = "none";
  };
  window.onclick = (e) => {
    if (e.target == popup) {
      popup.style.display = "none";
    }
  };
});
