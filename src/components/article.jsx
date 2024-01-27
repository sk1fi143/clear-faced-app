import React, { useState, useRef  } from 'react';

export const Article = ({ title, url }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const textRef = useRef(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setIsCollapsed(!isCollapsed);
  };
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  const fullText = () => {
    textRef.current.style.height = 'auto';
    toggleExpansion();
  };
  const collapseText = () => {
    textRef.current.style.height = '';
    toggleExpansion();
  };
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setIsVisible(!isVisible);   
  };

  return (
    <div className="article">
      {isVisible ? (
        <div className="article__col1">
          <h4 className="article__col1__title" onClick={toggleVisibility}>
            Название статьи
          </h4>
          <div className="article__col1__line"></div>
        </div>
      ) : (
        <div className={isCollapsed ? "article__hide article__hide__none" : "article__hide"}>
          <div className="article__hide__green" onClick={toggleCollapse}>
            <h4 className="article__hide__title">Название статьи</h4>
          </div>
          <div className="article__hide__row">
            <div className="article__hide__row__col">
              <div className="article__hide__row__col__text" ref={textRef}>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
              </div>
              <div className="article__hide__row__col__open" onClick={isExpanded ? collapseText : fullText}>
              {isExpanded ? 'Свернуть' : 'Смотреть полностью'}
              </div>
            </div>
            <img className="article__hide__row__image" alt="" src={url}></img>
          </div>
        </div>
      )}
    </div>
  );
};
