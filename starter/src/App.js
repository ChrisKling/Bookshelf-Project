import "./App.css";
import { useState } from "react";
import { CreateSearchBar } from "./Components/SearchBar";
import { CreateBooksList } from "./Components/BooksList";

function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <CreateSearchBar
          setShowSearchPage={setShowSearchPage}
          showSearchPage={showSearchPage}
        />
      ) : (
        <CreateBooksList
          setShowSearchPage={setShowSearchPage}
          showSearchPage={showSearchPage}
        />
      )}
    </div>
  );
}

export default App;
