export default function Card({ card, onCardClick, ownerId, onCardLike }) {
  onCardLike(card);
  const isOwn = card.owner._id === ownerId;
  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
  );
  
  function handleClick() {
    onCardClick(card);
  } 
  return (
    <article className="card">
      <img className="card__img" alt={card.name} src={card.link} onClick={handleClick}/>
      <h2 className="card__name">{card.name}</h2>
      <div className="card__like">
        <button className="card__like-button" type="button" aria-label="поставить лайк"></button>
        <p className="card__like-number">{card.likes.length}</p>
      </div>
      <button className={cardDeleteButtonClassName} type="button" aria-label="удалить карточку"></button>
    </article>
  )
}