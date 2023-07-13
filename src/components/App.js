import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  //2. Функция меняет перемнную состояния из false в true
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main 
        //1. Обработчики. При клике вызывается функция
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <PopupWithForm 
        name="edit-form"
        title="Редактировать профиль"
        btnText="Сохранить изменения"
        //3. isEditProfilePopupOpen = true ? popup_opened --> попап открывается
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups}
      >
        <label className="popup__input-element">
          <input className="popup__input popup__input_type_name" id="name" type="text" name="username" 
            placeholder="Имя" minLength="2" maxLength="40" required/>
          <span className="name-error popup__error"></span>
        </label>
        <label className="popup__input-element">
          <input className="popup__input popup__input_type_job" id="job" type="text" name="job" 
            placeholder="О себе" minLength="2" maxLength="200" required/>
          <span className="job-error popup__error"></span>
        </label>
      </PopupWithForm>
      
      <PopupWithForm 
        name="add-cards"
        title="Новое место"
        btnText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__input-element">
          <input className="popup__input popup__input_type_caption" id="caption" type="text" name="name"
            placeholder="Название" minLength="2" maxLength="30" required/>
          <span className="caption-error popup__error"></span>
        </label>
        <label className="popup__input-element">
          <input className="popup__input popup__input_type_link" id="link" type="url" name="link"
            placeholder="Ссылка на картинку" required/>
          <span className="link-error popup__error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm 
        name="edit-avatar"
        title="Обновить аватар"
        btnText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__input-element">
          <input className="popup__input popup__input_type_avatar" id="avatar" type="url" name="avatar"
            placeholder="Ссылка на картинку" required/>
          <span className="avatar-error popup__error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm 
        name="delete"
        title="Обновить аватар"
        btnText="Да"
      />
    </div>
  );
}

export default App;
