import MainPageFirst from "./pages/mainPageFirst";
import MainPageWhatThis from "./pages/mainPageWhatThis";
import MainPageEffect from "./pages/mainPageEffect";
import MainPageLiders from "./pages/mainPageLiders";
import MainPageAbout from "./pages/mainPageAbout";
import SwiperPage from "./swiper";
import { useLayoutEffect } from "react";

function MainPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  
  return (
    <div className="mainPage">
      <MainPageFirst />
      <MainPageWhatThis />
      <MainPageAbout />
      <MainPageEffect />
      <SwiperPage />
      <MainPageLiders />
    </div>
  );
}
export default MainPage;
