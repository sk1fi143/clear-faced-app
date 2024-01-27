import React, { useState } from 'react';

export const ProducrArticle = ({ title, text }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="ProdArticle">
        <div className="ProdArticle__col1">
          <h4 className="ProdArticle__col1__title" onClick={toggleVisibility}>
            {title}
          </h4>
          <div className="ProdArticle__col1__line"></div>
        </div>
        <p className={isVisible ?  "ProdArticle__text" : "ProdArticle__text ProdArticle__text__show"}>
        {text}
        </p>
    </div>
  );
};
