
import './App.css';
import {BrowserRouter, Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Update from "./components/Update";
import Detail from "./components/Detail";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
            <Route path='/update/:id' element={<Update/>}></Route>
            <Route path='/view/:id' element={<Detail/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
