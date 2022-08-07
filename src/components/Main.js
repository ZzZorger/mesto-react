import { useEffect, useState } from 'react';
import { api } from '../utils/Api.js';
import Card from './Card.js'

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [cards, setCards] = useState([]);
  const [userAvatar, setUserAvatar] = useState('');
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  useEffect(() => {
    api.getServerData()
      .then(res => {
        setUserAvatar(res.avatar);
        setUserName(res.name);
        setUserDescription(res.about);
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
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar}>
          <img className="profile__image" alt="Изображение профиля" src={userAvatar} />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" type="button" aria-label="редактирование профиля" onClick={onEditProfile}></button>
          <p className="profile__job">{userDescription}</p>
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

