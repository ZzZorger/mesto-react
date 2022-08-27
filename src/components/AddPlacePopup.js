import { useState } from "react";
import PopupWithForm from "./PopupWithForm.js"
export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      url
    });
  }
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleUrlChange(e) {
    setUrl(e.target.value);
  }
  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      submit="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__fieldset">
        <div className="popup__input-field">
          <input
            id="card-name"
            className="popup__input popup__input_type_name"
            type="text"
            name="name"
            placeholder="Название"
            required
            onChange={handleNameChange}
          />
          <span className="popup__error card-name-error" name="Error"></span>
        </div>
        <div className="popup__input-field">
          <input
            id="card-url"
            className="popup__input popup__input_type_place"
            type="url"
            name="url"
            placeholder="Ссылка на картинку"
            required
            onChange={handleUrlChange}
          />
          <span className="popup__error card-url-error" name="Error"></span>
        </div>
      </fieldset>
    </PopupWithForm>
  )
}
