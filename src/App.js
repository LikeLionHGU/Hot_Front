// import logo from './logo.svg';
// import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Main from "./routes/mainpage/Main";
import Test from "./routes/test/Test";
import Map from "./routes/map/Map";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
