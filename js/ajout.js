import { getAllBooksFromLocalStorage } from "./functions.js";
const ajoutLivre = () => {
  const books = getAllBooksFromLocalStorage();
  console.log(books.livres);
  const formData = new FormData(document.querySelector("form"));
  let book = {};
  book.titre = formData.get("titre");

  book.auteurs = formData.get("auteurs").split(",");
  book.isbn = formData.get("isbn");
  book.image = "/img/" + formData.get("image").name;
  book.editeurs = formData.get("editeurs");
  book.date_publication = formData.get("date_publication");
  book.genre = formData.get("genre");
  book.resume = formData.get("resume");
  book.langue = formData.get("langue");
  book.nombre_page = formData.get("nombre_page");
  book.disponibilite = formData.get("disponibilite");
  book.etat = formData.get("etat");
  book.emplacement = formData.get("emplacement");
  books.livres.push(book);
  localStorage.setItem("books", JSON.stringify(books));
};

document
  .querySelector('button[type="submit"]')
  .addEventListener("click", (e) => {
    e.preventDefault();
    ajoutLivre();
  });
