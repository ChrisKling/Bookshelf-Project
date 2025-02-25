const Book = ({ title, authors, image, shelf, id, booksHopper, book }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url("${image}")`,
          }}></div>
        <div className="book-shelf-changer">
          <select
            value={shelf}
            onChange={(e) => booksHopper(e.target.value, id, book)}>
            <option disabled>Move to...</option>
            <option value="currentlyReading">Currently</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

export default Book;
