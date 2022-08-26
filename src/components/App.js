import { useEffect, useState } from 'react';
import { userData } from '../contexts/CurrentUserContext.js'
import { cardsArray } from '../contexts/CardsContext.js'
import { api } from '../utils/Api.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';

function App() {
  //Hooks
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
      });
    api.getCardsData()
      .then(res => {
        setCards(res)
      })
      .catch(err => {
        console.log(`Ошибка: ${err}`)
      });
  }, []);
  function handleUpdateUser(data) {
    api.patchProfileData(data)
      .then((newData) => {
        setUserData(newData);
      })
      .catch(err => {
        console.log(`Ошибка: ${err}`)
      });
  }
  function handleUpdateAvatar(img) {
    api.patchProfileAvatar(img)
      .then((newImg) => {
        setUserData(newImg)
      })
      .catch(err => {
        console.log(`Ошибка: ${err}`)
      });
  }
  function handleAddPlaceSubmit(newCard) {
    api.postCard(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch(err => {
        console.log(`Ошибка: ${err}`)
      });
  }
  //Open and Close handlers
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

  // Card functions
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => {
        console.log(`Ошибка: ${err}`)
      });
  }
  function handleDeleteCard(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards(cards.filter(c => c !== card))
      })
      .catch(err => {
        console.log(`Ошибка: ${err}`)
      });
  }
  return (
    <userData.Provider value={currentUser}>
      <cardsArray.Provider value={cards}>
        <div className="body">
          <div className="page">
            <Header />
            <Main
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleDeleteCard}
            />
            <Footer />
          </div>
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />
          <PopupWithForm
            name="confirm"
            title="Вы уверены, что хотите удалить карточку?"
            submit="Да"
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
          />
        </div>
      </cardsArray.Provider>
    </userData.Provider>
  );
}

export default App;
