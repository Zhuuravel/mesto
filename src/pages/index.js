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
    popupAvatar, popupProfile, profileEditButton, avatarEditButton, formElementProfile, formElementAvatar, avatarInput, nameInput,
    descriptionInput, profileAvatar, profileName, profileDescription, contentAddButton, popupContent,
    formElementContent, popupImage, validationConfig, popupConfirm
} from "../utils/constants.js";

const optionsApi = {
    url: 'https://mesto.nomoreparties.co/v1/cohort-75',
    headers: {
        authorization: 'de840de0-da05-4c0b-8b96-55f691e0c5a8',
        'Content-Type': "application/json"
    }
    }

const api = new Api(optionsApi);

//id пользователя

let userId

api.getProfileInfo()
    .then((items) => {
        userId = items._id
    })



const profileRenderer = new UserInfo(profileName, profileDescription, profileAvatar);

const popupDeleteConfirm = new PopupWithConfirm(popupConfirm);
popupDeleteConfirm.setEventListeners();

const addItems = (item) => {
    const card = new Card(item, '#element__template', (cardId) => {
            api.addLikeClick(cardId)
                .then(() => {
                    card.addLike();
                })
                .catch((error) => {
                    console.log(error)
                });

            },
        (cardId) => {
            api.deleteLikeClick(cardId)
                .then(() => {
                    card.removeLike();
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
        }, userId, api
    )
    const cardElement = card.getView()
    cardList.addItem(cardElement)
}

// function handleCardLike(item, card, userId) {
//     const isLiked = item.likes.some((like) => like._id === userId);
//     const cardId = item._id;
//
//     if (isLiked) {
//         api.deleteLikeClick(cardId)
//             .then((items) => {
//                 card.updateLikes();
//             })
//             .catch((error) => {
//                 console.error(`Ошибка при удалении лайка: ${error}`);
//             });
//     } else {
//         api.addLikeClick(cardId)
//             .then((items) => {
//                 card.updateLikes();
//             })
//             .catch((error) => {
//                 console.error(`Ошибка при добавлении лайка: ${error}`);
//             });
//     }
// }

const cardList = new Section({
    renderer: (item) => {
        addItems(item)
    }
}, '.elements__list')
// cardList.renderItems(initialCards)

api.getAllCards()
    .then((items) => {
        items.forEach((item) => {
            addItems(item);
        })
    })

const popupEditAvatar = new PopupWithForm(popupAvatar, {
    submitForm: (info, evt) => {
        evt.preventDefault();
        api.setProfileAvatar(avatarInput)
            .then(() => {
            })
            .finally( () => popupEditAvatar.renderLoading(false))
        popupEditAvatar.renderLoading(true)
        profileRenderer.setUserAvatar(avatarInput.value);
        popupEditAvatar.close();
    }
});

popupEditAvatar.setEventListeners();

const validationPopupAvatar = new FormValidator(validationConfig, formElementAvatar);
validationPopupAvatar.enableValidation();

avatarEditButton.addEventListener('click', () => {
    popupEditAvatar.open();
    api.getProfileInfo()
        .then((items) => {
            avatarInput.value = items.avatar;
            validationPopupAvatar.setInitialState();
        })
});



const popupEditProfile = new PopupWithForm(popupProfile, {
    submitForm: (info, evt) => {
        evt.preventDefault();
        api.setProfileInfo(nameInput, descriptionInput)
            .then(() => {
            })
            .finally( () => popupEditProfile.renderLoading(false))
        popupEditProfile.renderLoading(true)
        profileRenderer.setUserInfo(nameInput.value, descriptionInput.value);
        popupEditProfile.close();
    }
});

popupEditProfile.setEventListeners();

const validationPopupProfile = new FormValidator(validationConfig, formElementProfile);
validationPopupProfile.enableValidation();

profileEditButton.addEventListener('click', () => {
    popupEditProfile.open();
    validationPopupProfile.setInitialState();
    api.getProfileInfo()
        .then((items) => {
            nameInput.value = items.name;
            descriptionInput.value = items.about;
        })
});


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
            })
            .finally( () => popupAddContent.renderLoading(false))
        popupAddContent.renderLoading(true)
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

