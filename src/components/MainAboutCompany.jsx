import firstinfoimg from '../assets/img/aboutcomp-img1.png';
import secondinfoimg from '../assets/img/aboutcomp-img2.png';
import thirdinfoimg from '../assets/img/aboutcomp-img3.png';
import imgwithfon from '../assets/img/aboutcomp-imgfon.png';
import fourthinfoimg from '../assets/img/aboutcomp-img4.png';
import leaves1 from '../assets/img/leaves-ac-1.png';
import leaves2 from '../assets/img/leaves-ac-2.png';
import React, { useLayoutEffect } from "react";

function MainAboutCompany() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  
  let title = 'О КОМПАНИИ';
  let ptext1 =
    'Молодой российский бренд “Ясноликая” появился благодаря желанию врача-косметолога создать универсальный базовый уход для особенной кожи. Меня зовут Юлиана Шиян, и я практикующий врач-косметолог, дерматолог. Уже больше 15 лет я работаю с проблемной кожей и помогаю своим пациентам подбирать индивидуальные решения в уходе за лицом.';
  let ptext2 =
    'Свой путь в профессии я начала с Пермской государственной медицинской академии, Академии постдипломного образования в Санкт-Петербурге. И сейчас продолжаю непрерывно обучаться новым тенденциям в сфере мировой косметологии, посещаю конгрессы и форумы, слежу за научными разработками и технологиями. На данный момент я владею большим спектром методик в терапевтической, инъекционной и аппаратной косметологии';
  let ptext3 =
    'Подросткам, взрослым мужчинам и женщинам с проблемной кожей и многолетним акне я помогаю обрести здоровое и чистое лицо. Пациентам после 30-35 лет – вернуть сияние, продлить молодость и профилактировать возрастные изменения. При этом я всегда подробно рассказываю пациентам, как ухаживать за своей кожей в домашних условиях, потому что правильно подобранный уход – это та основа, без которой невозможно сохранить внешний вид кожи здоровым, молодым и ухоженным.';
  let ptext4 =
    'Для того чтобы решить проблемы с кожей, мужчины и девушки, мальчики и девочки наносят на кожу все подряд – маслами пытаются увлажнить кожу, гидрофильными бальзамами и спиртовыми лосьонами – очистить от жирности и загрязнений, скрабами – избавиться от черных точек, неровного рельефа и шелушения. Проблема чаще не решается, а наоборот, – усугубляется. Тюбиков и баночек на полках становится все больше, хотя для хорошего ухода вместо них нужно поставить всего 3 основных средства: правильную умывалку, хороший лосьон и 1-2 крема в зависимости от сезона. Мои пациенты при таком подходе всегда видят изменения, и кожа говорит “спасибо”.';
  let ptext5 =
    'Проработав много лет с разными косметическими продуктами, используя весь свой опыт и знания, я поняла: пришло время разработать собственную линейку базовых средств. В них я могу быть уверена на 100 % – они бережно воздействуют даже на чувствительную кожу, не приводят к образованию комедонов, сохраняют и восстанавливают защитные свойства кожи. Их я могу я рекомендовать любому человеку, кто хочет подобрать базовый универсальный уход без рисков для кожи.';
  return (
    <div className="mainAboutCompany">
      <div className="mainAboutCompany__infoblock-1">
        <div className="mainAboutCompany__first-infotextblock">
          <h2 className="mainAboutCompany__title">{title}</h2>
          <p className="mainAboutCompany__first-text">{ptext1}</p>
        </div>
        <img className="mainAboutCompany__first-info-img" alt="" src={firstinfoimg} />
      </div>
      <div className="mainAboutCompany__infoblock-2">
        <img className="mainAboutCompany__second-info-img" alt="" src={secondinfoimg} />
        <div className="mainAboutCompany__second-infotextblock">
          <p className="mainAboutCompany__second-text">{ptext2}</p>
        </div>
      </div>
      <div className="mainAboutCompany__infoblock-3">
        <div className="mainAboutCompany__third-infotextblock">
          <p className="mainAboutCompany__third-text">{ptext3}</p>
        </div>
        <img className="mainAboutCompany__third-info-img" alt="" src={thirdinfoimg} />
      </div>
      <div className="mainAboutCompany__infoblock-4">
        <h2 className="mainAboutCompany__second-title">
          Какой он,
          <br />
          правильный базовый уход?
        </h2>
        <div className="mainAboutCompany__infoblock-4-1">
          <div className="mainAboutCompany__img-with-fonblock">
            <img className="mainAboutCompany__img-with-fon" src={imgwithfon} alt=''/>
          </div>
          <div className="mainAboutCompany__fourth-infotextblock">
            <p className="mainAboutCompany__fourth-text">{ptext4}</p>
          </div>
        </div>
      </div>
      <div className="mainAboutCompany__infoblock-5">
        <div className="mainAboutCompany__fifth-infotextblock">
          <p className="mainAboutCompany__fifth-text">{ptext5}</p>
        </div>
        <img className="mainAboutCompany__fourth-info-img" src={fourthinfoimg} alt=''/>
      </div>
      <div className="mainAboutCompany__leaves">
        <img className="mainAboutCompany__leaves1" src={leaves1} alt=''/>
        <img className="mainAboutCompany__leaves2" src={leaves2} alt=''/>
      </div>
    </div>
  );
}
export default MainAboutCompany;
