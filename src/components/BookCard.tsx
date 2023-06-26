import "./BookCard.css";
import { Book } from "./book";

interface Props {
  book: Book;
}

function BookCard({ book }: Props) {
  return (
    <>
      <div className="book-card">
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        {book.isBestSeller && <p>BestSeller</p>}
        <img src={book.coverImageUrl} alt={book.title} />
      </div>
    </>
  );
}
export default BookCard;
