import React from "react";

function handleEditAvatarClick() {
  document.querySelector('.popup_feat_edit-avatar').classList.add('popup_opened');
}

function handleEditProfileClick() {
  document.querySelector('.popup_feat_edit-form').classList.add('popup_opened');
}

function handleAddPlaceClick() {
  document.querySelector('.popup_feat_add-cards').classList.add('popup_opened');
}

function Main() {
  return (
    <main className="content">
        <section className="profile">
          <div className="profile__container">
            <button 
              className="profile__avatar-btn" 
              onClick={handleEditAvatarClick}>
              <img className="profile__avatar" src="#" alt="Аватар"/> 
            </button>
            <div className="profile__intro">
              <div className="profile__intro-name-container">
                <h1 className="profile__intro-name">Жак-Ив Кусто</h1>
                <button 
                  className="profile__intro-edit-btn opacity" 
                  type="button" 
                  aria-label="Редактировать" 
                  onClick={handleEditProfileClick}>
                </button>
              </div>
              <p className="profile__intro-job">Исследователь океана</p>
            </div> 
          </div>
          <button 
            className="profile__add-btn opacity" 
            type="button" aria-label="Добавить" 
            onClick={handleAddPlaceClick}>
          </button>
        </section>

        <section className="elements">
          <ul className="elements__items">

          </ul>
        </section>
      </main>
  );
}

export default Main;