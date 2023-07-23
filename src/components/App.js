import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import DeleteCardPopup from "./DeleteCardPopup";
import { api } from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false);
  const [isPreloading, setPreloading] = React.useState(false);
  // Стейт, отвечающий за отображение данных текущего пользователя
  const [currentUser, setCurrentUser] = React.useState({});
  //Создание стейта карточек
  const [cards, setCards] = React.useState([]);
  //Стейт, отвечающий за выбранную карточку
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [cardToDelete, setCardToDelete] = React.useState({});

  React.useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getInitialCards()])
      .then(([dataUser, dataCards]) => {
        setCurrentUser(dataUser);
        setCards(dataCards);
      })
      .catch((error) => console.log(`Что-то пошло не так: ${error}`));
  }, []);

  // Открытие попапа ававтара
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  // Открытие попапа реадиктирования попапа
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  // Открытие попапа добавления карточки
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  // Открытие попапа удаления карточки
  function handleDeleteCardClick(card) {
    setDeleteCardPopupOpen(true);
    setCardToDelete(card);
  }

  // Закрытие попапов
  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setDeleteCardPopupOpen(false);
    setSelectedCard(null);
    setCardToDelete({});
  }

  // Открытие выбранной карточки
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  // Поставить лайк
  function handleCardLike(card) {
    // Проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((error) => console.log(`Что-то пошло не так: ${error}`));
  }

  // Удалить карточку
  function handleCardDelete(card) {
    setPreloading(true);
    api
      .deleteCard(card._id)
      .then(() => {
        //  создаем копию массива, исключив удаленную карточку и обновляем стейт
        setCards((state) => state.filter((c) => c._id !== card._id));
        closeAllPopups();
      })
      .catch((error) => console.log(`Что-то пошло не так: ${error}`))
      .finally(() => {
        setPreloading(false);
        setCardToDelete({});
      });
  }

  //Обновить данные профиля
  function handleUpdateUser(newDataUser) {
    setPreloading(true);
    api
      .setUserInfo(newDataUser)
      .then((dataUser) => {
        setCurrentUser(dataUser);
        closeAllPopups();
      })
      .catch((error) => console.log(`Что-то пошло не так: ${error}`))
      .finally(() => setPreloading(false));
  }

  function handleUpdateAvatar(newAvatar) {
    setPreloading(true);
    api
      .setUserAvatar(newAvatar)
      .then((dataUser) => {
        setCurrentUser(dataUser);
        closeAllPopups();
      })
      .catch((error) => console.log(`Что-то пошло не так: ${error}`))
      .finally(() => setPreloading(false));
  }

  function handleAddPlaceSubmit(cardData) {
    setPreloading(true);
    api
      .postNewCard(cardData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((error) => console.log(`Что-то пошло не так: ${error}`))
      .finally(() => setPreloading(false));
  }

  //«Внедряем» данные из currentUser с помощью провайдера
  //пропс value содержит значение, которое распространаяется дочерним элементам
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          //1. Обработчики. При клике вызывается функция
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          // onCardDelete={handleCardDelete}
          onTrashClick={handleDeleteCardClick}
          cards={cards}
        />

        <Footer />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isPreloading={isPreloading}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isPreloading={isPreloading}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          isPreloading={isPreloading}
        />

        <DeleteCardPopup
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
          isPreloading={isPreloading}
          card={cardToDelete}
          onCardDelete={handleCardDelete}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
