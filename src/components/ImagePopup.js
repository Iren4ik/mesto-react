import React from "react";

function ImagePopup({card, onClose}) {
  
  return (
    <section className={`popup popup_overlay_dark popup_feat_show-image ${card ? "popup_opened" : ''}`}>
      {card && (
        <div className="popup__container">
        <figure className="popup__figure">
          <button className="popup__close-btn opacity" type="button" onClick={onClose}></button>
          <img className="popup__photo" src={card.link} alt={card.name} />
          <figcaption className="popup__caption">{card.name}</figcaption>
        </figure>
      </div>
      )}
    </section>
  )
}

export default ImagePopup;