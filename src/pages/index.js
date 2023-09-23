import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithConfirm from "../components/PopupWithConfirm.js"
import UserInfo from "../components/UserInfo.js"
import Api from "../components/Api.js";
import "./index.css"

import {
    optionsApi, popupAvatar, popupProfile, profileEditButton, avatarEditButton, formElementProfile, formElementAvatar, avatarInput, nameInput,
    descriptionInput, profileAvatar, profileName, profileDescription, contentAddButton, popupContent,
    formElementContent, popupImage, validationConfig, popupConfirm
} from "../utils/constants.js";

const api = new Api(optionsApi);

let userId

Promise.all([api.getProfileInfo(), api.getAllCards()])
    .then(([userData, cards]) => {
        // тут установка данных пользователя
        userId = userData._id;

        // popupEditProfile.setInputValues(userData)
        // popupEditAvatar.setInputValues(userData)

        profileRenderer.setUserInfo(userData.name, userData.about);
        profileRenderer.setUserAvatar(userData.avatar);
        // и тут отрисовка карточек
        cards.reverse().forEach((card) => {
            addItems(card);
        })
    })
    .catch((err) => {
        console.log(err);
    })

const profileRenderer = new UserInfo(profileName, profileDescription, profileAvatar);

const popupDeleteConfirm = new PopupWithConfirm(popupConfirm);
popupDeleteConfirm.setEventListeners();

const addItems = (item) => {
    const card = new Card(item, '#element__template',
        (cardId) => {
            api.addLikeClick(cardId)
                .then((res) => {
                    card.addLike(res);

                })
                .catch((error) => {
                    console.log(error)
                });

            },
        (cardId) => {
            api.deleteLikeClick(cardId)
                .then((res) => {
                    card.removeLike(res);
                })
                .catch((error) => {
                    console.log(error)
                });
        }, openPhoto,
        () => {
            popupDeleteConfirm.setAction( () => {
                popupDeleteConfirm.renderLoading(true)
                api.deleteCards(item._id)
                    .then( () => {
                        card.remove()
                        popupDeleteConfirm.close()
                    })
                    .catch((err) => console.log(err))
                    .finally( () => popupDeleteConfirm.renderLoading(false))
            })
            popupDeleteConfirm.open()
        }, userId
    )
    const cardElement = card.getView()
    cardList.addItem(cardElement)
}

const cardList = new Section({
    renderer: (item) => {
        addItems(item)
    }
}, '.elements__list')

const popupEditAvatar = new PopupWithForm(popupAvatar, {
    submitForm: (info, evt) => {
        evt.preventDefault();
        api.setProfileAvatar(avatarInput)
            .then(() => {
                profileRenderer.setUserAvatar(avatarInput.value);
                popupEditAvatar.close();
            })
            .finally( () => popupEditAvatar.renderLoading(false))
        popupEditAvatar.renderLoading(true)
    }
});

popupEditAvatar.setEventListeners();

const validationPopupAvatar = new FormValidator(validationConfig, formElementAvatar);
validationPopupAvatar.enableValidation();

avatarEditButton.addEventListener('click', () => {
    popupEditAvatar.open();
    popupEditAvatar.setInputValues(profileRenderer.getUserInfo())
    validationPopupAvatar.setInitialState();
});



const popupEditProfile = new PopupWithForm(popupProfile, {
    submitForm: (info, evt) => {
        evt.preventDefault();
        api.setProfileInfo(nameInput, descriptionInput)
            .then(() => {
                profileRenderer.setUserInfo(nameInput.value, descriptionInput.value);
                popupEditProfile.close();
            })
            .finally( () => popupEditProfile.renderLoading(false))
        popupEditProfile.renderLoading(true)
    }
});

popupEditProfile.setEventListeners();

const validationPopupProfile = new FormValidator(validationConfig, formElementProfile);
validationPopupProfile.enableValidation();

profileEditButton.addEventListener('click', () => {
    popupEditProfile.open();
    validationPopupProfile.setInitialState();
    popupEditProfile.setInputValues(profileRenderer.getUserInfo());
})


const popupAddContent = new PopupWithForm(popupContent, {
    submitForm: (info, evt) => {
        evt.preventDefault();
        const addCard = {
            name: info.title,
            link: info.photo
        }
        api.createCards(addCard)
            .then((newCard) => {
                addItems(newCard);
                popupAddContent.close();
            })
            .finally( () => popupAddContent.renderLoading(false))
        popupAddContent.renderLoading(true)
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

