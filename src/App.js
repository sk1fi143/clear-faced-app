import "./scss/app.scss";
import Header from "./components/header.jsx";
import MainPage from "./components/mainPage.jsx";
import Catalog from './components/catalog.jsx';
import Footer from "./components/footer.jsx";
import Basket from "./components/basket.jsx";
import Thankyou from "./components/thankyou.jsx";
import Form from "./components/form.jsx";
import ProductPenka from "./components/productPenka.jsx";
import ProductTonik from "./components/productTonik.jsx";
import MainAboutCompany from "./components/MainAboutCompany.jsx";
import MainPolzSogl from "./components/MainPolzSogl.jsx";
import MainDostOpl from "./components/MainDostOpl.jsx";
import { Routes, Route } from "react-router-dom";
import { AllArcticles } from "./components/allArcticles.jsx";

function App() {

  return (
    <div className="contein">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/thankyou" element={<Thankyou />}></Route>
          <Route path="/penka" element={<ProductPenka />}></Route>
          <Route path="/tonik" element={<ProductTonik />}></Route>
          <Route path="/about" element={<MainAboutCompany />}></Route>
          <Route path="/agreement" element={<MainPolzSogl />}></Route>
          <Route path="/delivery" element={<MainDostOpl />}></Route>
          <Route path="/articles" element={<AllArcticles />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
