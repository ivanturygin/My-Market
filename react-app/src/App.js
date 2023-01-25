import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductPage from "./components/ProductPage/ProductPage";
import MainPage from "./components/MainPage/MainPage";


function App() {
  return (

<BrowserRouter>

    < Header/>

  <Routes>

    <Route path="/product" element={<ProductPage/>}/>

    <Route path="/" element={<MainPage/>}/>

  </Routes>

  <Footer/>

</BrowserRouter>

  );

}

export default App;
