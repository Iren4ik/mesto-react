import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isPreloading }) {
  // записываем в переменную объект, возвращаемый хуком. Он содержит единственное поле - current
  //в это поле Реакт запишет указатель на DOM-элемент, когда будет формировать DOM -дерево
  const cardTitleRef = React.useRef();
  const cardLinkRef = React.useRef();

  //Вызываем метод value на поле current объекта
  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: cardTitleRef.current.value,
      link: cardLinkRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="add-cards"
      title="Новое место"
      btnText={isPreloading ? "Сохранение..." : "Создать"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__input-element">
        <input
          className="popup__input popup__input_type_caption"
          id="caption"
          type="text"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
          ref={cardTitleRef}
        />
        <span className="caption-error popup__error"></span>
      </label>
      <label className="popup__input-element">
        <input
          className="popup__input popup__input_type_link"
          id="link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
          ref={cardLinkRef}
        />
        <span className="link-error popup__error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;