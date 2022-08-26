export default function Card({ card, onCardClick, userId, onCardLike, onCardDelete }) {
  const isOwn = card.owner._id === userId;
  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? 'card__delete-button-visible' : 'card__delete-button-hidden'}`
  );
  const isLiked = card.likes.some(i => i._id === userId);
  const cardLikeButtonClassName = (
    `card__like-button ${isLiked ? 'card__like-button_active' : ''}`
  );
  function handleLikeClick() {
    onCardLike(card);
  }
  function handleClick() {
    onCardClick(card);
  } 
  function handleDeleteClick() {
    onCardDelete(card);
  }
  return (
    <article className="card">
      <img className="card__img" alt={card.name} src={card.link} onClick={handleClick}/>
      <h2 className="card__name">{card.name}</h2>
      <div className="card__like">
        <button className={cardLikeButtonClassName} type="button" aria-label="поставить лайк" onClick={handleLikeClick}></button>
        <p className="card__like-number">{card.likes.length}</p>
      </div>
      <button className={cardDeleteButtonClassName} type="button" aria-label="удалить карточку" onClick={handleDeleteClick}></button>
    </article>
  )
}