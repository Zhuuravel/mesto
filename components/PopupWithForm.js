import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector, submit) {
        super(popupSelector);
        this._submit = submit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = Array.from(this._form.querySelectorAll('.popup__input'))
    }

    _getInputValues() {
        const values = {};
        this._inputs.forEach = (input) => {
            values[input.name] = input.value;
        }
        return values
    }

    setInputValues(data) {
        this._inputs.forEach((input) => {
            if (input.name === 'description') {
                input.value = data[input.name];
            } else {
                input.value = data[input.name];
            }
        });
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submit(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._popup.reset()
    }
}

export default PopupWithForm