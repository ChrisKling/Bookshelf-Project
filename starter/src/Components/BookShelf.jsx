import Book from "./Book";

const BookShelf = ({ title, allBooks }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {allBooks.map((book) => (
            <li>
              <Book
                title={book.title}
                authors={book.authors}
                image={book.imageLinks.smallThumbnail}
                shelf={book.shelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
