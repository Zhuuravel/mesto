import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm.js"
import UserInfo from '../components/UserInfo.js'

import {initialCards, popupProfile, profileEditButton, formElementProfile, nameInput,
    descriptionInput, profileName, profileDescription, contentAddButton, popupContent,
    formElementContent, popupImage, validationConfig} from "../utils/constants.js";

const profileRenderer = new UserInfo(profileName, profileDescription);


// function createCard(cardData) {
//     return new Card(cardData, '#element__template');
// }
//
// function renderCard(cardData) {
//     container.prepend(createCard(cardData).getView());
// }
//
// initialCards.forEach((cardData) => {
//     renderCard(cardData);
// })

// function handleContentFormSubmit (evt) {
//     evt.preventDefault();
//     renderCard({name: titleInput.value, link: photoLinkInput.value}, '#element__template');
//     closePopup(popupContent);
// }
// formElementContent.addEventListener('submit', handleContentFormSubmit);

const addItems = (item) => {
    const card = new Card(item, '#element__template', openPhoto)
    const cardElement = card.getView()
    cardList.addItem(cardElement)
}

const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        addItems(item)
    }
}, '.elements__list')
cardList.renderItems()

const popupEditProfile = new PopupWithForm(popupProfile, {
    submitForm: (info, evt) => {
        evt.preventDefault();
        profileRenderer.setUserInfo(info.name, info.description);
        popupEditProfile.close();
    }
});

popupEditProfile.setEventListeners();

const validationPopupProfile = new FormValidator(validationConfig, formElementProfile);
validationPopupProfile.enableValidation();

profileEditButton.addEventListener('click', () => {
    popupEditProfile.open();
    validationPopupProfile.setInitialState();
    nameInput.value = profileRenderer.getUserInfo().name.textContent;
    descriptionInput.value = profileRenderer.getUserInfo().description.textContent;
});


const popupAddContent = new PopupWithForm(popupContent, {
    submitForm: (info, evt) => {
        evt.preventDefault();
        console.log(info.photo)
        const addCard = {
            name: info.title,
            link: info.photo
        }
        addItems(addCard);
        popupAddContent.close();
    }
});

popupAddContent.setEventListeners();

const validationPopupContent = new FormValidator(validationConfig, formElementContent);
validationPopupContent.enableValidation();

contentAddButton.addEventListener('click', () => {
    popupAddContent.open();
    validationPopupContent.setInitialState();
});


const popupOpenImage = new PopupWithImage(popupImage)

function openPhoto(name, link) {
    popupOpenImage.open(name, link);
    popupOpenImage.setEventListeners();
};
// document.querySelectorAll('.popup').forEach( popup => {
//     popup.addEventListener('click', closePopupOverlay);
// })
//
// function closePopupOverlay(evt) {
//         if (evt.currentTarget === evt.target) {
//              closePopup(evt.currentTarget)
//          }
// }

// function openPopup(popup) {
//     popup.classList.add('popup_opened');
//     document.addEventListener('keydown', closeByEsc)
// }

// function closePopup(popup) {
//     popup.classList.remove('popup_opened');
//     document.removeEventListener('keydown', closeByEsc)
// }

// function closeByEsc(evt) {
//     if (evt.key === "Escape") {
//         const openedPopup = document.querySelector('.popup_opened')
//         closePopup(openedPopup)
//     }
// }



// profileEditButton.addEventListener('click', function() {
//     openPopup(popupProfile);
//     nameInput.value = profileName.textContent;
//     descriptionInput.value = profileDescription.textContent;
//     validationPopupProfile.setInitialState()
// });

// function handleProfileFormSubmit (evt) {
//     evt.preventDefault();
//     profileName.textContent = nameInput.value;
//     profileDescription.textContent = descriptionInput.value;
//     closePopup(popupProfile);
// }

// profilePopupCloseButton.addEventListener('click', () => closePopup(popupProfile));
//
// formElementProfile.addEventListener('submit', handleProfileFormSubmit);
//
// contentAddButton.addEventListener('click', function() {
//     openPopup(popupContent);
//     validationPopupContent.setInitialState();
// });
// contentPopupCloseButton.addEventListener('click', () => closePopup(popupContent));
//
// imagePopupCloseButton.addEventListener('click', () => closePopup(popupImage));
//


//
// export default openPopup