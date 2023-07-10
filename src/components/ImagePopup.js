import React from "react";

function ImagePopup() {
  return (
    <div className="popup popup_overlay_dark popup_feat_show-image">
      <div className="popup__container">
        <figure className="popup__figure">
          <button className="popup__close-btn opacity" type="button"></button>
          <img className="popup__photo" src="#" alt="Фото"/>
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;