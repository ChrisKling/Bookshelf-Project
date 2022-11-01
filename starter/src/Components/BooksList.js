import BookShelf from "./BookShelf";
import { getAll } from "../BooksAPI";
import { useState, useEffect } from "react";

export const BooksList = ({ setShowSearchPage, showSearchPage }) => {
  const [allBooks, setAllBooks] = useState([]);
  async function getAllBooks() {
    const allBooks = await getAll();

    setAllBooks(allBooks);
  }
  useEffect(() => {
    getAllBooks();
  }, []);
  useEffect(() => {
    console.log(allBooks);
  }, [allBooks]);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf title="Read" allBooks={allBooks} />
        <BookShelf title="Currently Reading" allBooks={allBooks} />
        <BookShelf title="Want To Read" allBooks={allBooks} />
      </div>
      <div className="open-search">
        <a onClick={() => setShowSearchPage(!showSearchPage)}>Add a book</a>
      </div>
    </div>
  );
};
