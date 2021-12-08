import {Route, Routes, BrowserRouter} from "react-router-dom";
//HOC
import DefaultHOC from "./HOC/Default.HOC";

//Components
import Temp from "./components/temp";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <DefaultHOC path="/" exact element={<Temp/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
