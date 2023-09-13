import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector, {submitForm}) {
        super(popupSelector);
        this._form = popupSelector.querySelector('.popup__form');
        this._submitForm = submitForm;
        this._inputs = Array.from(this._popup.querySelectorAll('.popup__input'));
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
}

export default PopupWithForm