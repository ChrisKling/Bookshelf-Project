import "./App.css";
import { useState, useEffect } from "react";
import { SearchBar } from "./Components/SearchBar";
import { BookCase } from "./Components/BookCase";
import { getAll } from "./BooksAPI";

function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [allBooks, setAllBooks] = useState([]);
  const [allMyBooks, setAllMyBooks] = useState([]);

  async function getAllBooks() {
    // 7 original books
    const allBooks = await getAll();

    setAllBooks(allBooks);
  }

  function booksHopper(option, id) {
    // console.log("target id:", id);
    // console.log("selected shelf", option);
    const updatedBooks = allBooks.map((buk) => {
      if (buk.id === id) {
        buk.shelf = option;
      }
      setAllMyBooks(updatedBooks);

      return buk;
    });
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
