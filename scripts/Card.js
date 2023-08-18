class Card {
    constructor(cardName, cardLink, templateSelector) {
        this._name = cardName;
        this._link = cardLink;
    }

    _getTemplate() {
        const cardTemplate = document.querySelector('#element__template').content.querySelector('.element').cloneNode(true);
        console.log(this._name)
        console.log(this._link)
        return cardTemplate;
    }

    _setData() {
        const imageCard = this._newCard.querySelector('.element__image');
        imageCard.src = this._link;
        imageCard.alt = this._name;
        const titleCard = this._newCard.querySelector('.element__title');
        titleCard.textContent = this._name;
    }

    _handleDeleteCard() {
        this._newCard.remove();
        this._newCard = null;
    }

    _handleLikeCard() {
        this._newCard.classList.toggle('element__like-button_active');
    }

    _handleImageCard() {

    }

    _setListeners() {
        const deleteButton = this._newCard.querySelector('.element__delete-button');
        deleteButton.addEventListener('click', this._handleDeleteCard)

        const likeButton = this._newCard.querySelector('.element__like-button');
        likeButton.addEventListener('click', this._handleLikeCard);

        const imageButton = this._newCard.querySelector('.element__image-button');
        imageButton.addEventListener('click', this._handleImageCard);
    }

    getView() {
        this._newCard = this._getTemplate();
        this._setData()
        this._setListeners()

        return this._newCard
    }
}

export default Card