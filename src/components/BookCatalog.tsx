import "./BookCatalog.css";
import BookCard from "./BookCard";
import { Book } from "./book";

interface Props {
  books: Book[];
}

function BookCatalog({ books }: Props) {
  return (
    <>
      <h1>Book Catalog</h1>
      <div className="book-catalog">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}

export default BookCatalog;
