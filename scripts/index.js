const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_profile');
const profilePopupCloseButton = popupProfile.querySelector('.popup__close-button');
const formElementProfile = document.querySelector('.popup__form-container');
const nameInput = formElementProfile.querySelector('.popup__input_name');
const descriptionInput = formElementProfile.querySelector('.popup__input_description');
const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
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
const formElementContent = popupContent.querySelector('.popup__form-container');
const titleInput = formElementContent.querySelector('.popup__input_title');
const photoLinkInput = formElementContent.querySelector('.popup__input_photo-link');

contentAddButton.addEventListener('click', function() {
    openPopup(popupContent);
    photoLinkInput.value = '';
    titleInput.value = '';
});
contentPopupCloseButton.addEventListener('click', () => closePopup(popupContent));

const popupImage = document.querySelector('.popup_type_image');
const imagePopupCloseButton = popupImage.querySelector('.popup__close-button');
const imageViewCard = popupImage.querySelector('.popup__image');
const descriptionViewCard = popupImage.querySelector('.popup__description');

const container = document.querySelector('.elements__list');
const template = document.querySelector('#element__template').content;

function createCard(cardName, cardLink) {
    const card = template.querySelector('.element').cloneNode(true);
    card.querySelector('.element__image').src = cardLink;
    card.querySelector('.element__image').alt = cardName;
    card.querySelector('.element__title').textContent = cardName;
    card.querySelector('.element__delete-button').addEventListener('click', () => {
        card.remove();
    });
    card.querySelector('.element__like-button').addEventListener('click', function (event) {
        event.target.classList.toggle('element__like-button_active');
    });
    card.querySelector('.element__image-button').addEventListener('click', function() {
        popupImage.classList.add('popup_opened');
        imageViewCard.src = cardLink;
        imageViewCard.alt = cardName;
        descriptionViewCard.textContent = cardName;
    });
    return card;
}

function renderNewCard(card, container) {
    container.prepend(card);
}

function renderCard(card, container) {
    container.append(card);
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