import { useContext, useState, useEffect } from 'react';
import { userData } from '../contexts/CurrentUserContext.js';
import PopupWithForm from "./PopupWithForm.js"
export default function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const currentUser = useContext(userData)
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  function handleNameChange(e) {
    setName(e.target.name);
    console.log({name})
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.description);
    console.log(description)
  }
  function handleSubmit(e) {
    e.preventDefault();
    // console.log({name, description})
    // onUpdateUser({
    //   name,
    //   about: description,
    // });
  }
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);
  return (
    <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <fieldset className="popup__fieldset">
        <div className="popup__input-field">
          <input id="profile-name" className="popup__input popup__input_type_name" type="text" name="name"
            placeholder={name} required onChange={handleNameChange}/>
          <span className="popup__error profile-name-error" name="Error"></span>
        </div>
        <div className="popup__input-field">
          <input id="profile-about" className="popup__input popup__input_type_place" type="text" name="about"
            placeholder={description} required onChange={handleDescriptionChange}/>
          <span className="popup__error profile-about-error" name="Error"></span>
        </div>
      </fieldset>
    </PopupWithForm>
  )
}