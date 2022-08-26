import { useContext } from 'react';
import { cardsArray } from '../contexts/CardsContext.js';
import { userData } from '../contexts/CurrentUserContext.js';
import { api } from '../utils/Api.js';
import Card from './Card.js';

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, setCards }) {
  const currentUser = useContext(userData);
  const cards = useContext(cardsArray);
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
            <Card card={item} onCardClick={onCardClick} userId={currentUser._id} onCardLike={handleCardLike} onCardDelete={handleDeleteCard} />
          )
        })}
      </section>
    </main>
  )
}

