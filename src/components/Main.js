import { useEffect, useState, useContext } from 'react';
import { cardsArray } from '../contexts/CardsContext.js';
import { userData } from '../contexts/CurrentUserContext.js';
// import { api } from '../utils/Api.js';
import Card from './Card.js'

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const currentUser = useContext(userData);
  const cards = useContext(cardsArray);
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar}>
          <img className="profile__image" alt="Изображение профиля" src={currentUser.avatar} />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__edit-button" type="button" aria-label="редактирование профиля" onClick={onEditProfile}></button>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="добавление фотокарточки" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map(item => {
          return (
            <Card card={item} onCardClick={onCardClick}/>
          )
        })}
      </section>
    </main>
  )
}

