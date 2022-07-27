import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';



function App() {
  function handleEditAvatarClick() {
    isEditAvatarPopupOpenSetter(true)
  }
  function handleEditProfileClick() {
    isEditProfilePopupOpenSetter(true);
  }
  function handleAddPlaceClick() {
    isAddPlacePopupOpenSetter(true)
  }
  function closeAllPopups() {

  }
  // const [isPopupOpen, popupOpenSetter] = React.useState(false);
  const [isEditProfilePopupOpen, isEditProfilePopupOpenSetter] = React.useState(false)
  const [isAddPlacePopupOpen, isAddPlacePopupOpenSetter] = React.useState(false)
  const [isEditAvatarPopupOpen, isEditAvatarPopupOpenSetter] = React.useState(false)
  
  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
        <Footer />
      </div>
      <PopupWithForm name="profile" title="Редактировать профиль" submit="Сохранить" isOpen={isEditProfilePopupOpen}>
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
      <PopupWithForm name="card" title="Новое место" submit="Создать" isOpen={isAddPlacePopupOpen}>
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
      <PopupWithForm name="avatar" title="Обновить аватар" submit="Сохранить" isOpen={isEditAvatarPopupOpen}>
        <fieldset className="popup__fieldset">
          <div className="popup__input-field">
            <input id="avatar-url" className="popup__input popup__input_type_place" type="url" name="url"
              placeholder="Ссылка на аватар" required />
            <span className="popup__error avatar-url-error" name="Error"></span>
          </div>
        </fieldset>
      </PopupWithForm>
      <ImagePopup />
    </div>
  );
}

export default App;
