export const initialCards = [
    {
        name: 'Токио',
        link: 'https://images.unsplash.com/photo-1621139151681-5ac8d73128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80.jpg'
    },
    {
        name: 'Венеция',
        link: 'https://images.unsplash.com/photo-1519112232436-9923c6ba3d26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80.jpg'
    },
    {
        name: 'Париж',
        link: 'https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80.jpg'
    },
    {
        name: 'Сидней',
        link: 'https://images.unsplash.com/photo-1524562865630-b991c6c2f261?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80.jpg'
    },
    {
        name: 'Нью-Йорк',
        link: 'https://images.unsplash.com/photo-1582760548598-0bccdf815aa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80.jpg'
    },
    {
        name: 'Москва',
        link: 'https://images.unsplash.com/photo-1537891115166-4affb371bbd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80.jpg'
    }
];

export const profileEditButton = document.querySelector('.profile__edit-button');
export const popupProfile = document.querySelector('.popup_type_profile');
export const formElementProfile = popupProfile.querySelector('.popup__form');
export const nameInput = formElementProfile.querySelector('.popup__input_name');
export const descriptionInput = formElementProfile.querySelector('.popup__input_description');
export const profileName = '.profile__name';
export const profileDescription = '.profile__description';

export const contentAddButton = document.querySelector('.profile__add-button');
export const popupContent = document.querySelector('.popup_type_content');
export const formElementContent = popupContent.querySelector('.popup__form');

export const popupImage = document.querySelector('.popup_type_image');

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};