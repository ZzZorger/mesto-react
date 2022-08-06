import React from 'react';
import { api } from '../utils/Api.js';
import Card from './Card.js'

export default function Main(props) {
  React.useEffect(() => {
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
  const [cards, setCards] = React.useState([]);
  const [userAvatar, setUserAvatar] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatar}>
          <img className="profile__image" alt="Изображение профиля" src={userAvatar} />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" type="button" aria-label="редактирование профиля" onClick={props.onEditProfile}></button>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="добавление фотокарточки" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map(item => {
          return (
            <Card card={item} onCardClick={props.onCardClick}/>
          )
        })}
      </section>
    </main>
  )
}

