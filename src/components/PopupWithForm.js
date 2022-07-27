export default function PopupWithForm(props) {
  return (
    props.isOpen &&
        <div className={`popup popup-${props.name} popup_is-opened`}>
          <div className="popup__content">
            <button className="close-button" type="button" aria-label="закрыть окно"></button>
            <h2 className="popup__title">{props.title}</h2>
            <form className="popup__form" name={`popup-${props.name}_data`}>
              {props.children}
              <button className="popup__save-button" type="submit">{props.submit}</button>
            </form>
          </div>
        </div>
  )
}