const elementTemplate = document.querySelector('#element').content;
const contentAddButton = document.querySelector('.profile__add-button');
const popupContent = document.querySelector('.popup_type_content');
const contentPopupCloseButton = popupContent.querySelector('.popup__close-button');
let formElementContent = popupContent.querySelector('.popup__form-container');
let titleInput = formElementContent.querySelector('.popup__input_title');
let photoLinkInput = formElementContent.querySelector('.popup__input_photo-link');

function addContentPopup() {
    popupContent.classList.add('popup_opened');
    photoLinkInput.value = 0;
    titleInput.value = 0;
}

function removeContentPopup() {
    popupContent.classList.remove('popup_opened');
}

contentAddButton.addEventListener('click', addContentPopup) ;
contentPopupCloseButton.addEventListener('click', removeContentPopup);

function handleFormSubmit (evt) {
    evt.preventDefault();
    const elementItem = elementTemplate.querySelector('.element').cloneNode(true);
    elementItem.querySelector('.element__image').src = photoLinkInput.value;
    elementItem.querySelector('.element__title').textContent = titleInput.value;
    removeContentPopup();
}
formElementContent.addEventListener('submit', handleFormSubmit);

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];