import { Route } from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";

function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={HomePage} />
     <MovieHOC path="/movie/:id" exact component={Movie} />
    </>
  );
}
// / , /movie
export default App;
//temp.js->default layout-> DefaultHOC -> App.js -> Index.js
//inner->outer
