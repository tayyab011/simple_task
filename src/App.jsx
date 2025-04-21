

import './App.css'
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./page/Home.jsx";
import SingleProduct from './page/SingleProduct.jsx';

function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singleproduct/:id" element={<SingleProduct/>} />
         
         

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
