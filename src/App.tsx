import "./App.css";
import BookCatalog from "./components/BookCatalog";
import HookExample from "./components/HookExample";
import { dummyBooks } from "./components/data";

function App() {
  return (
    <>
      {/* <HookExample /> */}
      <BookCatalog books={dummyBooks} />
    </>
  );
}

export default App;
