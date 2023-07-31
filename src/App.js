import MovieList from "./MovieList.js";
import "./index.css";
import Student from "./Student";
import List from "./Components/List";
import Navbar from "./Navbar.js";

function App() {
  return (
    <>
      <h1>Movie App</h1>
      <Navbar />
      <MovieList />
      {/* { <Student name="Sunil" sname="Thakur" nilam="nilam" /> } */}

      {/* {< List />} */}
    </>
  );
}

export default App;
