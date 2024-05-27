// import logo from './logo.svg';
// import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Main from "./routes/mainpage/Main";
import Test from "./routes/test/Test";
import Result from "./routes/TestResult";
import Map from "./routes/map/MapContainer";
import MapContainer from "./routes/map/MapContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/map" element={<MapContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
