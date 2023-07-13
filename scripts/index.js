const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_profile');
const profilePopupCloseButton = popupProfile.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form-container');
let nameInput = formElement.querySelector('.popup__input_name');
let descriptionInput = formElement.querySelector('.popup__input_description');
let profileInfo = document.querySelector('.profile__info');
let profileName = profileInfo.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

function addPopup() {
    popupProfile.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
}

function removePopup() {
    popupProfile.classList.remove('popup_opened');
}

function toggleLike() {
    elementLikeButton.classList.toggle('element__like-button_painted-over');
}

profileEditButton.addEventListener('click', addPopup) ;
profilePopupCloseButton.addEventListener('click', removePopup);

    function handleFormSubmit (evt) {
        evt.preventDefault();

        profileName.textContent = nameInput.value;
        profileDescription.textContent =descriptionInput.value;
        removePopup();
    }
formElement.addEventListener('submit', handleFormSubmit);