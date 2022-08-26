import { useState } from "react";
import PopupWithForm from "./PopupWithForm.js"
export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const [avatar, setAvatar] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      url: avatar,
    });
    onClose();
  }
  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }
  return (
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <fieldset className="popup__fieldset">
        <div className="popup__input-field">
          <input id="avatar-url" className="popup__input popup__input_type_place" type="url" name="url"
            placeholder="Ссылка на аватар" required onChange={handleAvatarChange} />
          <span className="popup__error avatar-url-error" name="Error"></span>
        </div>
      </fieldset>
    </PopupWithForm>
  )
}
