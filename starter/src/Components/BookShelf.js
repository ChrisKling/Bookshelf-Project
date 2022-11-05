import Book from "./Book";

const BookShelf = ({ title, allBooks, booksHopper }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {allBooks.map((book) => (
            <li key={book.id}>
              <Book
                title={book.title}
                authors={book.authors}
                image={book.imageLinks.smallThumbnail}
                shelf={book.shelf}
                id={book.id}
                booksHopper={booksHopper}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
