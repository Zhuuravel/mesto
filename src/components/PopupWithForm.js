import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector, {submitForm}) {
        super(popupSelector);
        this._form = popupSelector.querySelector('.popup__form');
        this._submitButton = this._form.querySelector('.popup__submit-button');
        this._submitForm = submitForm;
        this._inputs = Array.from(this._popup.querySelectorAll('.popup__input'));
        this._buttonDeleteText = this._submitButton.textContent
    }

    _getInputValues() {
        this._values = {};
        this._inputs.forEach(input => {
            this._values[input.name] = input.value;
        });
        return this._values
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => this._submitForm(this._getInputValues(), evt))
    }

    close() {
        super.close()
        this._form.reset()
    }

    renderLoading(isLoading) {
        if(isLoading) {
            this._submitButton.textContent = 'Сохранение...'
        } else {
            this._submitButton.textContent = this._buttonDeleteText
        }
    }
}

export default PopupWithForm