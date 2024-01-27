function Card({titlecard, textcard1, textcard2}) {
  return (
    <div className="CardBlock">
      <div className="CardBlock__gradient-fon"></div>
      <h3 className="CardBlock__title">{titlecard}</h3>
      <p className="CardBlock__info-text">
        {textcard1}
        <br />
        <br />
        {textcard2}
      </p>
    </div>
  );
}
export default Card;
