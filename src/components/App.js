import { useEffect, useState } from 'react';
import { userData } from '../contexts/CurrentUserContext.js'
import { cardsArray } from '../contexts/CardsContext.js'
import { api } from '../utils/Api.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [currentUser, setUserData] = useState([]);
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupOpen, isEditProfilePopupOpenSetter] = useState(false);
  const [isAddPlacePopupOpen, isAddPlacePopupOpenSetter] = useState(false);
  const [isEditAvatarPopupOpen, isEditAvatarPopupOpenSetter] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  //API
  useEffect(() => {
    api.getServerData()
      .then(res => {
        setUserData(res)
      })
      .catch(err => {
        console.log(`Ошибка: ${err}`)
      })
    api.getCardsData()
      .then(res => {
        setCards(res)
      })
      .catch(err => {
        console.log(`Ошибка: ${err}`)
      })
  }, []);
  //Обработчики открытия и закрытия попапов
  function handleEditAvatarClick() {
    isEditAvatarPopupOpenSetter(true);
  }
  function handleEditProfileClick() {
    isEditProfilePopupOpenSetter(true);
  }
  function handleAddPlaceClick() {
    isAddPlacePopupOpenSetter(true);
  }
  function closeAllPopups() {
    isEditProfilePopupOpenSetter(false);
    isAddPlacePopupOpenSetter(false);
    isEditAvatarPopupOpenSetter(false);
    setSelectedCard(null);
  }
  function handleCardClick(card) {
    setSelectedCard(card)
  }

  return (
    <userData.Provider value={currentUser}>
      <cardsArray.Provider value={cards}>
        <div className="body">
          <div className="page">
            <Header />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} setCards={setCards} />
            <Footer />
          </div>
          <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
            <fieldset className="popup__fieldset">
              <div className="popup__input-field">
                <input id="profile-name" className="popup__input popup__input_type_name" type="text" name="name"
                  placeholder="Имя" required />
                <span className="popup__error profile-name-error" name="Error"></span>
              </div>
              <div className="popup__input-field">
                <input id="profile-about" className="popup__input popup__input_type_place" type="text" name="about"
                  placeholder="Профессиональная деятельность" required />
                <span className="popup__error profile-about-error" name="Error"></span>
              </div>
            </fieldset>
          </PopupWithForm>
          <PopupWithForm name="card" title="Новое место" submit="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
            <fieldset className="popup__fieldset">
              <div className="popup__input-field">
                <input id="card-name" className="popup__input popup__input_type_name" type="text" name="name"
                  placeholder="Название" required />
                <span className="popup__error card-name-error" name="Error"></span>
              </div>
              <div className="popup__input-field">
                <input id="card-url" className="popup__input popup__input_type_place" type="url" name="url"
                  placeholder="Ссылка на картинку" required />
                <span className="popup__error card-url-error" name="Error"></span>
              </div>
            </fieldset>
          </PopupWithForm>
          <PopupWithForm name="confirm" title="Вы уверены, что хотите удалить карточку?" submit="Да"></PopupWithForm>
          <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
            <fieldset className="popup__fieldset">
              <div className="popup__input-field">
                <input id="avatar-url" className="popup__input popup__input_type_place" type="url" name="url"
                  placeholder="Ссылка на аватар" required />
                <span className="popup__error avatar-url-error" name="Error"></span>
              </div>
            </fieldset>
          </PopupWithForm>
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </cardsArray.Provider>
    </userData.Provider>
  );
}

export default App;
