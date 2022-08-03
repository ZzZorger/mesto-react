import React from 'react';
import { api } from '../utils/Api.js';

export default function Main(props) {
  api.getServerData()
    .then(res => {
      setUserAvatar(res.avatar);
      setUserName(res.name);
      setUserDescription(res.about);
    })
  api.getCardsData()
    .then(res => {
      // setCards(res)
      // console.log(res[0].name)
      // console.log(res.likes)
      setCards(res)
    })
    const [cards, setCards] = React.useState([
      // console.log(cards.likes.length)
            // <article className="card">
            //   <img className="card__img" src={cards.link}/>
            //   <h2 className="card__name">{cards.name}</h2>
            //   <div className="card__like">
            //     <button className="card__like-button" type="button" aria-label="поставить лайк"></button>
            //     <p className="card__like-number"></p>
            //   </div>
            //   <button className="card__delete-button" type="button" aria-label="удалить карточку"></button>
            // </article>
    ])
  const [userAvatar, setUserAvatar] = React.useState('')
  const [userName, setUserName] = React.useState('')
  const [userDescription, setUserDescription] = React.useState('')
  // console.log(cards)
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
        <template id="card-template">
          <article className="card">
            <img className="card__img" />
            <h2 className="card__name"></h2>
            <div className="card__like">
              <button className="card__like-button" type="button" aria-label="поставить лайк"></button>
              <p className="card__like-number">0</p>
            </div>
            <button className="card__delete-button" type="button" aria-label="удалить карточку"></button>
          </article>
        </template>
      </section>
    </main>
  )
}

