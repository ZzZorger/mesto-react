export default function ImagePopup(props) {
  return (
    (props.card !== null) &&
    <div className="popup img-popup popup_is-opened">
      <div className="img-popup__content">
        <button className="close-button" type="button" aria-label="закрыть окно" onClick={props.onClose}></button>
        <img className="img-popup__img" alt="Alternative Text" src={props.card?.link}/>
        <h2 className="img-popup__title">{props.card.name}</h2>
      </div>
    </div>
  )
}