export default function ImagePopup( {card, onClose} ) {
  return (
    <div className={`popup img-popup ${(card !== null) && 'popup_is-opened'}`}>
      <div className="img-popup__content">
        <button className="close-button" type="button" aria-label="закрыть окно" onClick={onClose}></button>
        <img className="img-popup__img" alt={card?.name} src={card?.link}/>
        <h2 className="img-popup__title">{card?.name}</h2>
      </div>
    </div>
  )
}