import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

const initialCards = [
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

const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_profile');
const profilePopupCloseButton = popupProfile.querySelector('.popup__close-button');
const formElementProfile = popupProfile.querySelector('.popup__form');
const nameInput = formElementProfile.querySelector('.popup__input_name');
const descriptionInput = formElementProfile.querySelector('.popup__input_description');
const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

document.querySelectorAll('.popup').forEach( popup => {
    popup.addEventListener('click', closePopupOverlay);
})

function closePopupOverlay(evt) {
        if (evt.currentTarget === evt.target) {
             closePopup(evt.currentTarget)
         }
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc)
    // popup.addEventListener('click', closePopupOverlay)
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc)
}

function closeByEsc(evt) {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector('.popup_opened')
        closePopup(openedPopup)
    }
}

profileEditButton.addEventListener('click', function() {
    openPopup(popupProfile);
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
    validationPopupProfile.setInitialState()
});
profilePopupCloseButton.addEventListener('click', () => closePopup(popupProfile));

function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    closePopup(popupProfile);
}
formElementProfile.addEventListener('submit', handleProfileFormSubmit);


const contentAddButton = document.querySelector('.profile__add-button');
const popupContent = document.querySelector('.popup_type_content');
const contentPopupCloseButton = popupContent.querySelector('.popup__close-button');
const formElementContent = popupContent.querySelector('.popup__form');
const titleInput = formElementContent.querySelector('.popup__input_title');
const photoLinkInput = formElementContent.querySelector('.popup__input_photo-link');

contentAddButton.addEventListener('click', function() {
    openPopup(popupContent);
    validationPopupContent.setInitialState();
});
contentPopupCloseButton.addEventListener('click', () => closePopup(popupContent));

const popupImage = document.querySelector('.popup_type_image');
const imagePopupCloseButton = popupImage.querySelector('.popup__close-button');

const container = document.querySelector('.elements__list');

function createCard(cardData) {
    return new Card(cardData, '#element__template');
}

function renderCard(cardData) {
    container.prepend(createCard(cardData).getView());
}

initialCards.forEach((cardData) => {
    renderCard(cardData);
})

imagePopupCloseButton.addEventListener('click', () => closePopup(popupImage));

function handleContentFormSubmit (evt) {
    evt.preventDefault();
    renderCard({name: titleInput.value, link: photoLinkInput.value}, '#element__template');
    closePopup(popupContent);
}
formElementContent.addEventListener('submit', handleContentFormSubmit);

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};

const validationPopupProfile = new FormValidator(validationConfig, formElementProfile)
const validationPopupContent = new FormValidator(validationConfig, formElementContent)

validationPopupProfile.enableValidation();
validationPopupContent.enableValidation()

export default openPopup