import { useContext } from 'react';
import { userData } from '../contexts/CurrentUserContext.js';
import Card from './Card.js';

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete, cards }) {
  const currentUser = useContext(userData);
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar}>
          <img className="profile__image" alt="Изображение профиля" src={currentUser.avatar} />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__edit-button" type="button" aria-label="редактирование профиля" onClick={onEditProfile} />
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="добавление фотокарточки" onClick={onAddPlace} />
      </section>
      <section className="elements">
        {cards.map(item => {
          return (
            <Card key={item._id} card={item} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />
          )
        })}
      </section>
    </main>
  )
}

