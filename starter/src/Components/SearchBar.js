export const SearchBar = ({ setShowSearchPage, showSearchPage }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a
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
