import Card from "./Card.js";
import initialCards from "./elements.js";

const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_profile');
const profilePopupCloseButton = popupProfile.querySelector('.popup__close-button');
const formElementProfile = document.querySelector('.popup__form');
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
});
profilePopupCloseButton.addEventListener('click', () => closePopup(popupProfile));

function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent =descriptionInput.value;
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
    photoLinkInput.value = '';
    titleInput.value = '';
    const buttonDisabled = popupContent.querySelector('.popup__submit-button')
    buttonDisabled.classList.add('popup__submit-button_disabled')
});
contentPopupCloseButton.addEventListener('click', () => closePopup(popupContent));

const popupImage = document.querySelector('.popup_type_image');
const imagePopupCloseButton = popupImage.querySelector('.popup__close-button');
const imageViewCard = popupImage.querySelector('.popup__image');
const descriptionViewCard = popupImage.querySelector('.popup__description');

const container = document.querySelector('.elements__list');
const template = document.querySelector('#element__template').content.querySelector('.element');

const createCard = (cardData) => {
    const card = template.cloneNode(true);
    card.querySelector('.element__image').src = cardData.link;
    card.querySelector('.element__image').alt = cardData.name;
    card.querySelector('.element__title').textContent = cardData.name;
    card.querySelector('.element__delete-button').addEventListener('click', () => {
        card.remove();
    });
    card.querySelector('.element__like-button').addEventListener('click', function (event) {
        event.target.classList.toggle('element__like-button_active');
    });
    card.querySelector('.element__image-button').addEventListener('click', function() {
        openPopup(popupImage);
        imageViewCard.src = cardData.link;
        imageViewCard.alt = cardData.name;
        descriptionViewCard.textContent = cardData.name;
    });
    return card;
}

const renderNewCard = (cardData) => {
    const card = new Card(cardData);
    container.prepend(card.getView());
}

const renderCard = (cardData) => {
    const card = new Card(cardData);
    container.append(card.getView());
}

initialCards.forEach(function (item) {
    renderCard(createCard(item.name, item.link), container);
})


imagePopupCloseButton.addEventListener('click', () => closePopup(popupImage));

function handleContentFormSubmit (evt) {
    evt.preventDefault();
    renderNewCard(createCard(titleInput.value, photoLinkInput.value), container);
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

enableValidation(validationConfig)