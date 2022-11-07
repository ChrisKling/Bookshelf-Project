import { search } from "../BooksAPI";
import { useState } from "react";
import BookShelf from "./BookShelf";

export const SearchBar = ({ setShowSearchPage, showSearchPage, allBooks }) => {
  const [foundBooks, setFoundBooks] = useState([]);
  const handleChange = (e) => {
    fetchMyData(e.target.value);
  };
  const fetchMyData = async (query) => {
    search(query).then((results) => {
      if (results && !results.error) {
        setFoundBooks(
          results.map((book) => {
            const matchedBookId = allBooks.find(
              (allbook) => allbook.id === book.id
            );

            if (matchedBookId) {
              // console.log(matchedBookId.title);
              return { ...book, shelf: matchedBookId.shelf };
            }
            // console.log("unassigned books:", book.shelf);
            return { ...book, shelf: "none" };
          })
        );
      } else {
        setFoundBooks([]);
      }
    });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a
          href="/"
          className="close-search"
          onClick={() => setShowSearchPage(!showSearchPage)}>
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, and title only"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <BookShelf allBooks={foundBooks} />
        {/* <ol className="books-grid"></ol> */}
      </div>
    </div>
  );
};
