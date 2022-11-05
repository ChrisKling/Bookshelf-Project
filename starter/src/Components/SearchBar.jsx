import { search } from "../BooksAPI";

export const SearchBar = ({ setShowSearchPage, showSearchPage }) => {
  function fetchMyData() {} ///TUE DUE
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
          <input type="text" placeholder="Search by title, and title only" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  );
};
