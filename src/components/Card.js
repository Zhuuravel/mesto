class Card {
    constructor(item, templateSelector, handleLikeClick, handleLikeDelete, handleCardClick, handleConfirmDelete, userId) {
        this._name = item.name;
        this._link = item.link;
        this._id = item._id;
        this._owner = item.owner;
        this._likes = item.likes;
        this._userId = userId;

        this._handleLikeClick = handleLikeClick;
        this._handleLikeDelete = handleLikeDelete;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleConfirmDelete = handleConfirmDelete;
    }

    _getTemplate() {
        return document
            .querySelector(this._templateSelector)
            .content.querySelector('.element')
            .cloneNode(true);
    }

    // _handleLikeCard() {
    //     const likeButton = this._newCardElement.querySelector('.element__like-button');
    //     const likeCount = this._newCardElement.querySelector('.element__like-counter');
    //     if (!(likeButton.classList.contains('elements__like-button_active'))) {
    //         this._api.addLikeClick(this._id)
    //             .then(() => {
    //
    //                 this._likes.length +=1
    //                 likeCount.textContent = this._likes.length
    //                 likeButton.classList.add('elements__like-button_active')
    //             })
    //     } else {
    //         this._api.deleteLikeClick(this._id)
    //             .then(() => {
    //                 likeButton.classList.remove('elements__like-button_active')
    //                 this._likes.length -=1
    //                 likeCount.textContent = this._likes.length
    //             })
    //     }
    // }

    // _handleImageCard() {
    //     this._newCardElement.querySelector('.element__image-button').addEventListener('click', () => {
    //         this._handleCardClick(this._name, this._link);
    //     })
    // }

    _setListeners() {
        this._cardDeleteButton.addEventListener('click', () => { this._handleConfirmDelete() })

        this._cardLikeButton.addEventListener('click', () => { this._handleLike() });

        this._cardImageButton.addEventListener('click', () => { this._handleCardClick(this._name, this._link) });
    }

    remove() {
        this._newCardElement.remove();
        this._newCardElement = null;
    }

    _checkDeleteButton() {
        if (this._userId !== this._owner._id) {
            this._cardDeleteButton.style.display = 'none'
        }
        else {
            this._cardDeleteButton.style.display = 'block'
        }
    }

    // _checkLikeButton() {
    //     const likeButton = this._newCardElement.querySelector('.element__like-button');
    //     if (this._likes.find((like) => like._id === this._userId)) {
    //         likeButton.classList.add('elements__like-button_active')
    //     }
    // }

    // handleLikeCard() {
    //     const likeButton = this._newCardElement.querySelector('.elements__like-button')
    //     const likeCount = this._newCardElement.querySelector('.elements__like-count')
    //
    //     if(!(likeButton.classList.contains('elements__like-button_active'))) {
    //         this._api.addLikeClick(this._id)
    //             .then((data) => {
    //                 likeButton.classList.add('elements__like-button_active')
    //                 likeCount.textContent = data._likes.length
    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //             })
    //     } else {
    //         this._api.deleteLikeClick(this._id)
    //             .then((data) => {
    //                 likeButton.classList.remove('elements__like-button_active')
    //                 likeCount.textContent = data._likes.length
    //                 console.log(data._likes.length)
    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //             })
    //     }
    // }

    _handleLike() {
        if (this._cardLikeButton.classList.contains('element__like-button_active')) {
            this._handleLikeDelete(this._id);
        } else {
            this._handleLikeClick(this._id);
        }
    };

    _setLikes() {
        this._cardLikeCount.textContent = this._likes.length;
    };

    _checkLikeButton() {
        this._likes.forEach(like => {
            if (like._id === this._userId) {
                this._cardLikeButton.classList.add('element__like-button_active')
            }
        })
    };

    addLike(item) {
        this._cardLikeButton.classList.add('element__like-button_active');
        this._likes = item.likes;
        this._setLikes();
    }

    removeLike(item) {
        this._cardLikeButton.classList.remove('element__like-button_active');
        this._likes = item.likes;
        this._setLikes();
    }

    getView() {
        this._newCardElement = this._getTemplate();
        this._cardLikeButton = this._newCardElement.querySelector('.element__like-button');
        this._cardDeleteButton = this._newCardElement.querySelector('.element__delete-button');
        this._cardImageButton = this._newCardElement.querySelector('.element__image');
        this._cardLikeCount = this._newCardElement.querySelector('.element__like-counter');

        this._newCardElement.querySelector('.element__image').src = this._link;
        this._newCardElement.querySelector('.element__image').alt = this._name;
        this._newCardElement.querySelector('.element__title').textContent = this._name;
        this._checkLikeButton();
        this._checkDeleteButton();
        this._setLikes();
        this._setListeners();

        return this._newCardElement
    }
}
export default Card