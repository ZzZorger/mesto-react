export default function PopupWithForm(props) {
  return (
        <div className={`popup popup-${props.name} ${props.isOpen && 'popup_is-opened'}`}>
          <div className="popup__content">
            <button className="close-button" type="button" aria-label="закрыть окно" onClick={props.onClose}></button>
            <h2 className="popup__title">{props.title}</h2>
            <form className="popup__form" name={`popup-${props.name}_data`}>
              {props.children}
              <button className="popup__save-button" type="submit">{props.submit || 'Сохранить'}</button>
            </form>
          </div>
        </div>
  )
}