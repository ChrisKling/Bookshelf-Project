import "./App.css";
import { useState } from "react";
import { SearchBar } from "./Components/SearchBar";
import { BookCase } from "./Components/BookCase";

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
        <BookCase
          setShowSearchPage={setShowSearchPage}
          showSearchPage={showSearchPage}
        />
      )}
    </div>
  );
}

export default App;
