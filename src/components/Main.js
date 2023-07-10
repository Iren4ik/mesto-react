import React from "react";

function Main({onEditAvatar, onEditProfile, onAddPlace}) {
  return (
    <main className="content">
        <section className="profile">
          <div className="profile__container">
            <button 
              className="profile__avatar-btn" 
              onClick={onEditAvatar}>
              <img className="profile__avatar" src="#" alt="Аватар"/> 
            </button>
            <div className="profile__intro">
              <div className="profile__intro-name-container">
                <h1 className="profile__intro-name">Жак-Ив Кусто</h1>
                <button 
                  className="profile__intro-edit-btn opacity" 
                  type="button" 
                  aria-label="Редактировать" 
                  onClick={onEditProfile}>
                </button>
              </div>
              <p className="profile__intro-job">Исследователь океана</p>
            </div> 
          </div>
          <button 
            className="profile__add-btn opacity" 
            type="button" aria-label="Добавить" 
            onClick={onAddPlace}>
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