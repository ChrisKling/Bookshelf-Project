import BookShelf from "./BookShelf";
import { useState, useEffect } from "react";

export const BookCase = ({
  setShowSearchPage,
  showSearchPage,
  allBooks,
  booksHopper,
}) => {
  const [readBooks, setReadBooks] = useState([]);
  const [wantBooks, setWantBooks] = useState([]);
  const [readingBooks, setReadingBooks] = useState([]);
  // console.log("allMyBooks:", allMyBooks);
  // async function getAllBooks() {
  //   const allBooks = await getAll();

  //   setAllBooks(allBooks);
  // }
  // useEffect(() => {
  //   getAllBooks();
  // }, []);

  useEffect(() => {
    sortBooks();
  }, [allBooks]);

  // function booksHopper(option, id) {
  //   // console.log("target id:", id);
  //   // console.log("selected shelf", option);
  //   const updatedBooks = allBooks.map((buk) => {
  //     if (buk.id === id) {
  //       buk.shelf = option;
  //     }
  //     setAllMyBooks(updatedBooks);

  //     return buk;
  //   });
  //   // setAllBooks((oldArray) => updatedBooks);
  //   // console.log("allBooks", allBooks);
  // }
  function sortBooks() {
    const readBooks = allBooks.filter((book) => book.shelf === "read");
    setReadBooks(readBooks);

    const currentBooks = allBooks.filter(
      (book) => book.shelf === "currentlyReading"
    );
    setReadingBooks(currentBooks);
    const wantBooks = allBooks.filter((book) => book.shelf === "wantToRead");
    setWantBooks(wantBooks);

    // console.log("read books", readBooks);
    // console.log("currently reading books", currentBooks);
    // console.log("want to read", wantBooks);
  }

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf
          title="Read"
          allBooks={readBooks}
          booksHopper={booksHopper}
        />
        <BookShelf
          title="Currently Reading"
          allBooks={readingBooks}
          booksHopper={booksHopper}
        />
        <BookShelf
          title="Want To Read"
          allBooks={wantBooks}
          booksHopper={booksHopper}
        />
      </div>
      <div className="open-search">
        <a
          onClick={() => setShowSearchPage(!showSearchPage)}
          // allBooks={allBooks}
        >
          Add a book
        </a>
      </div>
    </div>
  );
};
