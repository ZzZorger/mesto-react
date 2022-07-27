export default function ImagePopup() {
  return (
    <div className="popup img-popup">
      <div className="img-popup__content">
        <button className="close-button" type="button" aria-label="закрыть окно"></button>
        <img className="img-popup__img" alt="Alternative Text" />
        <h2 className="img-popup__title"></h2>
      </div>
    </div>
  )
}