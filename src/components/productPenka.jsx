import React from "react";
import ProductCard from "./productCard";
import { useLayoutEffect } from "react";
import penka from "../assets/img/penkaCard.png";
import penka1 from "../assets/img/penkaCardBig.png";
import penka2 from "../assets/img/penkaCard2.png";
import penka3 from "../assets/img/penkaCard3.png";
import YouCanLike from "./youCanLike";
import { ProducrArticle } from "./producrArticle";

function ProductPenka() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="prodItem">
      <ProductCard
        title="ПЕНКА ДЛЯ УМЫВАНИЯ"
        text="Воздушная пенка для умывания с комплексом церамидов, гиалуроновой кислотой, ниацинамидом и природными экстрактами мягко и бережно очищает кожу, не нарушая ее естественной защиты."
        price={400}
        size={180}
        id={0}
        url={penka}
        url1={penka1}
        url2={penka2}
        url3={penka3}
      />
      <div className="prodArtCol">
        <ProducrArticle
          title="Описание"
          text="Благодаря сбалансированной формуле средство деликатно удаляет загрязнения и остатки макияжа, способствует восстановлению гидролипидной мантии кожи для поддержания водного баланса и надежной защиты от негативного воздействия внешней среды. Пенка обладает освежающим и успокаивающим действием, идеально подходит для ухода за кожей, склонной к сухости, раздражению, шелушению и покраснению. Не сушит и не стягивает кожу. Некомедогенно. Нежный цветочный аромат и приятная текстура оставят только положительные впечатления от применения. Подходит для всех типов кожи, в том числе гиперчувствительной, проблемной, с признаками обезвоженности."
        />
        <ProducrArticle
          title="Способ применения"
          text="Благодаря сбалансированной формуле средство деликатно удаляет загрязнения и остатки макияжа, способствует восстановлению гидролипидной мантии кожи для поддержания водного баланса и надежной защиты от негативного воздействия внешней среды. Пенка обладает освежающим и успокаивающим действием, идеально подходит для ухода за кожей, склонной к сухости, раздражению, шелушению и покраснению. Не сушит и не стягивает кожу. Некомедогенно. Нежный цветочный аромат и приятная текстура оставят только положительные впечатления от применения. Подходит для всех типов кожи, в том числе гиперчувствительной, проблемной, с признаками обезвоженности."
        />
        <ProducrArticle
          title="Активные компоненты"
          text="Благодаря сбалансированной формуле средство деликатно удаляет загрязнения и остатки макияжа, способствует восстановлению гидролипидной мантии кожи для поддержания водного баланса и надежной защиты от негативного воздействия внешней среды. Пенка обладает освежающим и успокаивающим действием, идеально подходит для ухода за кожей, склонной к сухости, раздражению, шелушению и покраснению. Не сушит и не стягивает кожу. Некомедогенно. Нежный цветочный аромат и приятная текстура оставят только положительные впечатления от применения. Подходит для всех типов кожи, в том числе гиперчувствительной, проблемной, с признаками обезвоженности."
        />
        <ProducrArticle
          title="Состав"
          text="Благодаря сбалансированной формуле средство деликатно удаляет загрязнения и остатки макияжа, способствует восстановлению гидролипидной мантии кожи для поддержания водного баланса и надежной защиты от негативного воздействия внешней среды. Пенка обладает освежающим и успокаивающим действием, идеально подходит для ухода за кожей, склонной к сухости, раздражению, шелушению и покраснению. Не сушит и не стягивает кожу. Некомедогенно. Нежный цветочный аромат и приятная текстура оставят только положительные впечатления от применения. Подходит для всех типов кожи, в том числе гиперчувствительной, проблемной, с признаками обезвоженности."
        />
      </div>
      <YouCanLike />
    </div>
  );
}

export default ProductPenka;
