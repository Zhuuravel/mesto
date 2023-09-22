export const optionsApi = {
    url: 'https://mesto.nomoreparties.co/v1/cohort-75',
    headers: {
        authorization: 'de840de0-da05-4c0b-8b96-55f691e0c5a8',
        'Content-Type': "application/json"
    }
}

export const profileEditButton = document.querySelector('.profile__edit-button');
export const avatarEditButton = document.querySelector('.profile__avatar-button');
export const popupProfile = document.querySelector('.popup_type_profile');
export const popupAvatar = document.querySelector('.popup_type_avatar');
export const formElementProfile = popupProfile.querySelector('.popup__form');
export const formElementAvatar = popupAvatar.querySelector('.popup__form');
export const avatarInput = formElementAvatar.querySelector('.popup__input_avatar');
export const nameInput = formElementProfile.querySelector('.popup__input_name');
export const descriptionInput = formElementProfile.querySelector('.popup__input_description');
export const profileAvatar = '.profile__image';
export const profileName = '.profile__name';
export const profileDescription = '.profile__description';

export const contentAddButton = document.querySelector('.profile__add-button');
export const popupContent = document.querySelector('.popup_type_content');
export const formElementContent = popupContent.querySelector('.popup__form');

export const popupImage = document.querySelector('.popup_type_image');
export const popupConfirm = document.querySelector('.popup_type_confirm');

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};