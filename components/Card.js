class Card {
    constructor({name, link}, templateSelector, handleCardClick) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        return document
            .querySelector(this._templateSelector)
            .content.querySelector('.element')
            .cloneNode(true);
    }

    _handleDeleteCard() {
        this._newCardElement.remove();
        this._newCardElement = null;
    }

    _handleLikeCard() {
        this._newCardElement.querySelector('.element__like-button').classList.toggle('element__like-button_active');
    }

    _handleImageCard() {
        this._newCardElement.querySelector('.element__image-button').addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        })
    }

    _setListeners() {
        const deleteButton = this._newCardElement.querySelector('.element__delete-button');
        deleteButton.addEventListener('click', () => { this._handleDeleteCard() })

        const likeButton = this._newCardElement.querySelector('.element__like-button');
        likeButton.addEventListener('click', () => { this._handleLikeCard() });

        const imageButton = this._newCardElement.querySelector('.element__image');
        imageButton.addEventListener('click', () => { this._handleImageCard() });
    }

    getView() {
        this._newCardElement = this._getTemplate();
        this._newCardElement.querySelector('.element__image').src = this._link;
        this._newCardElement.querySelector('.element__image').alt = this._name;
        this._newCardElement.querySelector('.element__title').textContent = this._name;
        this._setListeners();

        return this._newCardElement
    }
}
export default Card