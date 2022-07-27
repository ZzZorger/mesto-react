export default function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatar}>
          <img className="profile__image" alt="изображение профиля"/>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button className="profile__edit-button" type="button" aria-label="редактирование профиля" onClick={props.onEditProfile}></button>
          <p className="profile__job">Исследователь океана</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="добавление фотокарточки" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        <template id="card-template">
          <article className="card">
            <img className="card__img"/>
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

