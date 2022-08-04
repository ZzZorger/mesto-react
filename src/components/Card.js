export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  } 
  return (
    <article className="card">
      <img className="card__img" src={props.card.link} onClick={handleClick}/>
      <h2 className="card__name">{props.card.name}</h2>
      <div className="card__like">
        <button className="card__like-button" type="button" aria-label="поставить лайк"></button>
        <p className="card__like-number">{props.card.likes.length}</p>
      </div>
      <button className="card__delete-button" type="button" aria-label="удалить карточку"></button>
    </article>
  )
}