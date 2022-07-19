import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
<body className="body">
  <div className="page">
    <Header/>
    <Main/>
    <Footer/>
  </div>
  <div className="popup popup-profile">
    <div className="popup__content">
      <button className="close-button" type="button" aria-label="закрыть окно"></button>
      <h2 className="popup__title">Редактировать профиль</h2>
      <form className="popup__form" name="popup_data" novalidate>
        <fieldset className="popup__fieldset">
          <div className="popup__input-field">
            <input id="profile-name" className="popup__input popup__input_type_name" type="text" name="name"
              autocomplete="off" placeholder="Имя" minlength="2" maxlength="40" required/>
            <span className="popup__error profile-name-error" name="Error"></span>
          </div>
          <div className="popup__input-field">
            <input id="profile-about" className="popup__input popup__input_type_place" type="text" name="about"
              autocomplete="off" placeholder="Профессиональная деятельность" minlength="2" maxlength="200" required/>
            <span className="popup__error profile-about-error" name="Error"></span>
          </div>
        </fieldset>
        <button className="popup__save-button" type="submit">Сохранить</button>
      </form>
    </div>
  </div>
  <div className="popup popup-card">
    <div className="popup__content">
      <button className="close-button" type="button" aria-label="закрыть окно"></button>
      <h2 className="popup__title">Новое место</h2>
      <form className="popup__form" name="popup_data" novalidate>
        <fieldset className="popup__fieldset">
          <div className="popup__input-field">
            <input id="card-name" className="popup__input popup__input_type_name" type="text" name="name" autocomplete="off"
              placeholder="Название" minlength="2" maxlength="30" required/>
            <span className="popup__error card-name-error" name="Error"></span>
          </div>
          <div className="popup__input-field">
            <input id="card-url" className="popup__input popup__input_type_place" type="url" name="url" autocomplete="off"
              placeholder="Ссылка на картинку" required/>
            <span className="popup__error card-url-error" name="Error"></span>
          </div>
        </fieldset>
        <button className="popup__save-button" type="submit">Создать</button>
      </form>
    </div>
  </div>
  <div className="popup popup-confirm">
    <div className="popup__content">
      <button className="close-button" type="button" aria-label="закрыть окно"></button>
      <h2 className="popup__title">Вы уверены, что хотите удалить карточку?</h2>
      <button className="popup__save-button" type="button">Да</button>
    </div>
  </div>
  <div className="popup popup-avatar">
    <div className="popup__content">
      <button className="close-button" type="button" aria-label="закрыть окно"></button>
      <h2 className="popup__title">Обновить аватар</h2>
      <form className="popup__form" name="popup_data" novalidate>
        <fieldset className="popup__fieldset">
          <div className="popup__input-field">
            <input id="avatar-url" className="popup__input popup__input_type_place" type="url" name="url" autocomplete="off"
              placeholder="Ссылка на аватар" required/>
            <span className="popup__error avatar-url-error" name="Error"></span>
          </div>
        </fieldset>
        <button className="popup__save-button" type="submit">Сохранить</button>
      </form>
    </div>
  </div>
  <div className="popup img-popup">
    <div className="img-popup__content">
      <button className="close-button" type="button" aria-label="закрыть окно"></button>
      <img className="img-popup__img" src="<%=require('./images/close_icon.svg')%>" alt="Alternative Text"/>
      <h2 className="img-popup__title"></h2>
    </div>
  </div>
</body>
  );
}

export default App;
