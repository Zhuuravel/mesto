const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_profile');
const profilePopupCloseButton = popupProfile.querySelector('.popup__close-button');
let formElementProfile = document.querySelector('.popup__form-container');
let nameInput = formElementProfile.querySelector('.popup__input_name');
let descriptionInput = formElementProfile.querySelector('.popup__input_description');
let profileInfo = document.querySelector('.profile__info');
let profileName = profileInfo.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

function addProfilePopup() {
    popupProfile.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
}

function removeProfilePopup() {
    popupProfile.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', addProfilePopup) ;
profilePopupCloseButton.addEventListener('click', removeProfilePopup);

function handleProfileFormSubmit (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileDescription.textContent =descriptionInput.value;
    removeProfilePopup();
}
formElementProfile.addEventListener('submit', handleProfileFormSubmit);

const contentAddButton = document.querySelector('.profile__add-button');
const popupContent = document.querySelector('.popup_type_content');
const contentPopupCloseButton = popupContent.querySelector('.popup__close-button');
let formElementContent = popupContent.querySelector('.popup__form-container');
let titleInput = formElementContent.querySelector('.popup__input_title');
let photoLinkInput = formElementContent.querySelector('.popup__input_photo-link');

function addContentPopup() {
    popupContent.classList.add('popup_opened');
    photoLinkInput.value = '';
    titleInput.value = '';
}

function removeContentPopup() {
    popupContent.classList.remove('popup_opened');
}

contentAddButton.addEventListener('click', addContentPopup) ;
contentPopupCloseButton.addEventListener('click', removeContentPopup);

const imageViewButton = document.querySelector('.element__image-button');
const popupImage = document.querySelector('.popup_type_image');
const imagePopupCloseButton = popupImage.querySelector('.popup__close-button');
let imageViewCard = popupImage.querySelector('.popup__image');
let descriptionViewCard = popupImage.querySelector('.popup__description');

const container = document.querySelector('.elements__list');
const template = document.querySelector('#element__template').content;

const renderCard = (function(item) {
    const li = template.querySelector('.element').cloneNode(true);
    li.querySelector('.element__image').src = item.link;
    li.querySelector('.element__title').textContent = item.name;
    li.querySelector('.element__delete-button').addEventListener('click', () => {
        li.remove();
    });
    li.querySelector('.element__image-button').addEventListener('click', function() {
        popupImage.classList.add('popup_opened');
        imageViewCard.src = item.link;
        descriptionViewCard.textContent = item.name;
    });
    container.append(li);
})

function removeImagePopup() {
    popupImage.classList.remove('popup_opened');
}

imagePopupCloseButton.addEventListener('click', removeImagePopup);

function handleContentFormSubmit (evt) {
    evt.preventDefault();
    const li = template.querySelector('.element').cloneNode(true);
    li.querySelector('.element__image').src = photoLinkInput.value;
    li.querySelector('.element__title').textContent = titleInput.value;
    container.prepend(li);
    removeContentPopup();
}
formElementContent.addEventListener('submit', handleContentFormSubmit);