import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm.js"
import UserInfo from '../components/UserInfo.js'
import './index.css'

import {initialCards, popupProfile, profileEditButton, formElementProfile, nameInput,
    descriptionInput, profileName, profileDescription, contentAddButton, popupContent,
    formElementContent, popupImage, validationConfig} from "../utils/constants.js";

const profileRenderer = new UserInfo(profileName, profileDescription);

const addItems = (item) => {
    const card = new Card(item, '#element__template', openPhoto)
    const cardElement = card.getView()
    cardList.addItem(cardElement)
}

const cardList = new Section({
    renderer: (item) => {
        addItems(item)
    }
}, '.elements__list')
cardList.renderItems(initialCards)

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
    const info = profileRenderer.getUserInfo()
    popupEditProfile.open();
    validationPopupProfile.setInitialState();
    nameInput.value = info.name;
    descriptionInput.value = info.description;
});


const popupAddContent = new PopupWithForm(popupContent, {
    submitForm: (info, evt) => {
        evt.preventDefault();
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
}

popupOpenImage.setEventListeners();