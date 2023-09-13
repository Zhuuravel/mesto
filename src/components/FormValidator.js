class FormValidator {
    constructor(config, formElement) {
        this._submitButton = formElement.querySelector(config.submitButtonSelector);
        this._inactiveButton = config.inactiveButtonClass;
        this._error = config.errorClass;
        this._inputError = config.inputErrorClass;
        this._formElement = formElement;
        this._inputs = Array.from(formElement.querySelectorAll(config.inputSelector));
    }

    _showInputError = (inputElement) => {
        const span = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputError);
        span.classList.add(this._error);
        span.textContent = inputElement.validationMessage;
    }

    _hideInputError(inputElement) {
        const span = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputError);
        span.classList.remove(this._error);
        span.textContent = '';
    }

    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement)
        } else {
            this._hideInputError(inputElement)
        }
    }

    _hasInvalidValue() {
        return this._inputs.some((inputElement) => !inputElement.validity.valid);
    }

    _toggleButtonState() {
        if(this._hasInvalidValue()) {
            this._disableSubmitButton()
        } else {
            this._submitButton.classList.remove(this._inactiveButton)
            this._submitButton.disabled = false
        }
    }

    _setEventListeners() {
        this._toggleButtonState()
        this._inputs.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement)
                this._toggleButtonState()
            })
        })
    }

    setInitialState() {
        this._inputs.forEach((inputElement) => {
            this._hideInputError(inputElement)
        })
        this._formElement.addEventListener('submit', this._formElement.reset());
        this._toggleButtonState();
    }

    _disableSubmitButton() {
        this._submitButton.classList.add(this._inactiveButton);
        this._submitButton.disabled = true;
    }

    enableValidation() {
        this._setEventListeners()
    }
}

export default FormValidator