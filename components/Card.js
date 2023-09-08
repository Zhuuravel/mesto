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

    _setData() {
        const imageCard = this._newCardElement.querySelector('.element__image');
        imageCard.src = this._link;
        imageCard.alt = this._name;
        const titleCard = this._newCardElement.querySelector('.element__title');
        titleCard.textContent = this._name;
    }

    _handleDeleteCard() {
        this._newCardElement.remove();
        this._newCardElement = null;
    }

    _handleLikeCard() {
        this._newCardElement.querySelector('.element__like-button').classList.toggle('element__like-button_active');
    }

    _handleImageCard() {
        this._handleCardClick(this._link, this._name)
        // const popupImage = document.querySelector('.popup_type_image');
        // const imageViewCard = popupImage.querySelector('.popup__image');
        // const descriptionViewCard = popupImage.querySelector('.popup__description');
        // imageViewCard.src = this._link;
        // imageViewCard.alt = this._name;
        // descriptionViewCard.textContent = this._name;
        // openPopup(popupImage);
    }

    _setListeners() {
        const deleteButton = this._newCardElement.querySelector('.element__delete-button');
        deleteButton.addEventListener('click', () => { this._handleDeleteCard() })

        const likeButton = this._newCardElement.querySelector('.element__like-button');
        likeButton.addEventListener('click', () => { this._handleLikeCard() });

        const imageButton = this._newCardElement.querySelector('.element__image-button');
        imageButton.addEventListener('click', () => { this._handleImageCard() });
    }

    getView() {
        this._newCardElement = this._getTemplate();
        this._setData();
        this._setListeners();

        return this._newCardElement
    }
}
export default Card