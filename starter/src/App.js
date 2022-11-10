import "./App.css";
import { useState, useEffect } from "react";
import { SearchBar } from "./Components/SearchBar";
import { BookCase } from "./Components/BookCase";
import { getAll, update } from "./BooksAPI";

function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [allBooks, setAllBooks] = useState([]);

  async function getAllBooks() {
    const allBooks = await getAll();

    setAllBooks(allBooks);
  }

  function booksHopper(option, id, book) {
    // console.log("target id:", id);
    // console.log("selected shelf", option);
    // console.log("allbooks", allBooks);

    const updatedBooks = allBooks.map((buk) => {
      if (buk.id === id) {
        buk.shelf = option;
        update(book, book.shelf);
      }
      return buk;
    });
    const addedBook = updatedBooks.find((book) => book.id === id);
    if (!addedBook || book.shelf !== addedBook.shelf) {
      // console.log("book and Option", book, option);
      book.shelf = option;
      updatedBooks.push(book);
      update(book, book.shelf);
    }
    // console.log("updatedBooks", updatedBooks);
    setAllBooks(updatedBooks);
    // setAllBooks((oldArray) => updatedBooks);
    // console.log("allBooks", allBooks);
  }

  useEffect(() => {
    getAllBooks();
  }, []);
  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBar
          allBooks={allBooks}
          booksHopper={booksHopper}
          setShowSearchPage={setShowSearchPage}
          showSearchPage={showSearchPage}
        />
      ) : (
        <BookCase
          allBooks={allBooks}
          booksHopper={booksHopper}
          setShowSearchPage={setShowSearchPage}
          showSearchPage={showSearchPage}
        />
      )}
    </div>
  );
}

export default App;
