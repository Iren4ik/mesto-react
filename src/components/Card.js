import React from "react";

function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="elements__element">
      <button className="elements__trash opacity" type="button"></button>
      <img className="elements__photo opacity" src={card.link} alt={card.name} onClick={handleClick}/>
      <div className="elements__caption">
        <h2 className="elements__place">{card.name}</h2>
        <div className="elements__like-container">
          <button className="elements__like" type="button"></button>
          <p className="elements__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;