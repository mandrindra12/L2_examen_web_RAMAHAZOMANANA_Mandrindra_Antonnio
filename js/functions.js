// Obtenir toutes les livres dans le fichier ../data/books.json et les renvoyer comme des objets en notation json
export const getAllBooks = async () => {
  try {
    const res = await fetch("/data/books.json");
    const data = await res.json();
    localStorage.setItem("books", JSON.stringify(data));
    return data;
  } catch (error) {
    console.error(error);
  }
};

//Vue que l'on ne peut pas ecrire dans un fichier json directement on va utiliser l' objet localStorage pour modifier les infos
export const getAllBooksFromLocalStorage = () => {
  try {
    const booksString = localStorage.getItem("books");
    return JSON.parse(booksString);
  } catch (error) {
    console.error(error);
  }
};

export const search = (value) => {
  const books = getAllBooksFromLocalStorage();
  return books.livres.filter(
    (book) =>
      book.titre.includes(value) || book.auteurs.find((u) => u.includes(value))
  );
};

export const getCard = (book) => {
  return `
  <h3>${book.titre ? book.titre : ""}</h3>
  <img class='img' src=${book.image}>
  <p>${book.resume}</p>
  <p>Genre: ${book.genre}</p>
  <p>Date de publication: ${book.date_publication}</p>
  <button titre="${book.titre}" class="details">Details</button></a>
  `;
};

export const getHTMLDetails = (book) => {
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
};
