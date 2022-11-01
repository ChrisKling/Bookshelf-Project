import "./App.css";
import { useState } from "react";
import { SearchBar } from "./Components/SearchBar";
import { BooksList } from "./Components/BooksList";

function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBar
          setShowSearchPage={setShowSearchPage}
          showSearchPage={showSearchPage}
        />
      ) : (
        <BooksList
          setShowSearchPage={setShowSearchPage}
          showSearchPage={showSearchPage}
        />
      )}
    </div>
  );
}

export default App;
