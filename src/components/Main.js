import React from "react";
import api from "../utils/Api";

function Main({onEditAvatar, onEditProfile, onAddPlace}) {

  const [userName, setUserName] = React.useState(false);
  const [userDescription, setUserDescription] = React.useState(false);
  const [userAvatar, setUserAvatar] = React.useState(false);

  React.useEffect(() => {
    api.getProfileInfo()
      .then((dataUser) => {
        setUserName(dataUser.name);
        setUserDescription(dataUser.about);
        setUserAvatar(dataUser.avatar);

        // console.log(userAvatar);
        // console.log(userName);
        // console.log(userDescription);
      })
      .catch(error => console.log(`Что-то пошло не так: ${error}`));
    }
  );

  return (
    <main className="content">
        <section className="profile">
          <div className="profile__container">
            <button 
              className="profile__avatar-btn" 
              onClick={onEditAvatar}>
              <img className="profile__avatar" src={userAvatar.toString()} alt="Аватар"/>
            </button>
            <div className="profile__intro">
              <div className="profile__intro-name-container">
                <h1 className="profile__intro-name">{userName}</h1>
                <button 
                  className="profile__intro-edit-btn opacity" 
                  type="button" 
                  aria-label="Редактировать" 
                  onClick={onEditProfile}>
                </button>
              </div>
              <p className="profile__intro-job">{userDescription}</p>
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