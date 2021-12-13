import { Route } from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";

//Component
import HomePage from "./pages/Home.page";

function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={HomePage} />
    </>
  );
}
// / , /movie
export default App;
//temp.js->default layout-> DefaultHOC -> App.js -> Index.js
//inner->outer
