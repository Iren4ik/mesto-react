import React from "react";

function PopupWithForm({name, title, children, btnText, isOpen, onClose, onSubmit}) {
  
  return (
    <div className={`popup popup_overlay_light popup_feat_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className={`popup__container popup__container_type_${name}`}>
        <button className="popup__close-btn opacity" type="button" onClick={onClose}></button>
        <h2 className={`popup__header popup__header_${name}`}>{title}</h2>
        <form className={`popup__input-container popup__input-container_type_${name}`} name={name} onSubmit={onSubmit}>
          {children}
          <input className={`popup__save-btn popup__save-btn_${name}`} type="submit" value={btnText}/>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;