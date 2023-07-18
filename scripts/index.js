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

function toggleLike() {
    elementLikeButton.classList.toggle('element__like-button_painted-over');
}

profileEditButton.addEventListener('click', addProfilePopup) ;
profilePopupCloseButton.addEventListener('click', removeProfilePopup);

    function handleFormSubmit (evt) {
        evt.preventDefault();

        profileName.textContent = nameInput.value;
        profileDescription.textContent =descriptionInput.value;
        removeProfilePopup();
    }
formElementProfile.addEventListener('submit', handleFormSubmit);