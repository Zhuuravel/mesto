import Popup from './Popup.js'

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._form = popupSelector.querySelector('.popup__form');
        this._buttonDelete = this._form.querySelector('.popup__submit-button');
        this._buttonDeleteText = this._buttonDelete.textContent;
    }

    setEventListeners() {
        super.setEventListeners()

        this._buttonDelete.addEventListener('click', e => {
            e.preventDefault()
            this._handleCallback()
        })
    }

    setAction(action) {
        this._handleCallback = action
    }

    renderLoading(isLoading) {
        if(isLoading) {
            this._buttonDelete.textContent = 'Сохранение...'
        } else {
            this._buttonDelete.textContent = this._buttonDeleteText
        }
    }
}