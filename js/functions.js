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
