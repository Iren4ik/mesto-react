import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <body className="page">
      <Header />
      <Main />
      <Footer />

      {/* ФОРМА РЕДАКТИРОВАНИЯ ПРОФИЛЯ*/}
      <div className="popup popup_overlay_light popup_feat_edit-form">
        <div className="popup__container popup__container_type_form">
          <button className="popup__close-btn opacity" type="button"></button>
          <h2 className="popup__header">Редактировать профиль</h2>
          
          <form className="popup__input-container popup__input-container_type_edit" name="edit-form" novalidate>
            <label className="popup__input-element">
              <input className="popup__input popup__input_type_name" id="name" type="text" name="username" placeholder="Имя"
                minlength="2" maxlength="40" required/>
              <span className="name-error popup__error"></span>
            </label>

            <label className="popup__input-element">
              <input className="popup__input popup__input_type_job" id="job" type="text" name="job" placeholder="О себе"
                minlength="2" maxlength="200" required/>
              <span className="job-error popup__error"></span>
            </label>
            <input className="popup__save-btn" type="submit" value="Сохранить"/>
          </form>
        </div>
      </div>
      
      {/* ФОРМА ДОБАВЛЕНИЯ КАРТОЧЕК */}
      <div className="popup popup_overlay_light popup_feat_add-cards">
        <div className="popup__container popup__container_type_form">
          <button className="popup__close-btn opacity" type="button"></button>
          <h2 className="popup__header">Новое место</h2>
          
          <form className="popup__input-container popup__input-container_type_add" name="add-form" novalidate>
            <label className="popup__input-element">
              <input className="popup__input popup__input_type_caption" id="caption" type="text" name="name"
                placeholder="Название" minlength="2" maxlength="30" required/>
              <span className="caption-error popup__error"></span>
            </label>

            <label className="popup__input-element">
              <input className="popup__input popup__input_type_link" id="link" type="url" name="link"
                placeholder="Ссылка на картинку" required/>
              <span className="link-error popup__error"></span>
            </label>
            <input className="popup__save-btn popup__save-btn_add" type="submit" value="Создать"/>
          </form>
        </div>
      </div>
      
        {/* РЕДАКТИРОВАНИЕ АВАТАРКИ */}
        <div className="popup popup_overlay_light popup_feat_edit-avatar">
          <div className="popup__container popup__container_type_avatar">
            <button className="popup__close-btn opacity" type="button"></button>
            <h2 className="popup__header">Обновить аватар</h2>
            <form className="popup__input-container popup__input-container_type_avatar" name="edit-avatar" novalidate>
              <label className="popup__input-element">
                <input className="popup__input popup__input_type_avatar" id="avatar" type="url" name="avatar"
                  placeholder="Ссылка на картинку" required/>
                <span className="avatar-error popup__error"></span>
              </label>
              <input className="popup__save-btn popup__save-btn_avatar" type="submit" value="Сохранить"/>
            </form>
          </div>
        </div>
      
        {/* ФОТО НА ВЕСЬ ЭКРАН */}
        <div className="popup popup_overlay_dark popup_feat_show-image">
          <div className="popup__container">
            <figure className="popup__figure">
              <button className="popup__close-btn opacity" type="button"></button>
              <img className="popup__photo" src="#" alt="Фото"/>
              <figcaption className="popup__caption"></figcaption>
            </figure>
          </div>
        </div>
      
        {/* УДАЛЕНИЕ КАРТОЧКИ */}
        <div className="popup popup_overlay_light popup_feat_delete">
          <div className="popup__container popup__container_type_delete">
            <button className="popup__close-btn opacity" type="button"></button>
            <h2 className="popup__header popup__header_delete">Вы уверенны?</h2>
            <form className="popup__input-container popup__input-container_type_delete" name="delete-card" novalidate>
              <button className="popup__save-btn popup__save-btn_delete" type="submit" value="Создать">
                Да
              </button>
            </form>
          </div>
        </div>

        <template id="elements-template">
          <li className="elements__element">
            <button className="elements__trash opacity" type="button"></button>
            <img className="elements__photo opacity" src="#" alt="Фото"/>
            <div className="elements__caption">
              <h2 className="elements__place"></h2>
              <div className="elements__like-container">
                <button className="elements__like" type="button"></button>
                <p className="elements__like-counter">0</p>
              </div>
            </div>
          </li>
        </template>
    </body>
  );
}

export default App;
