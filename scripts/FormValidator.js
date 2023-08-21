class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._input = config.inputSelector;
        this._submitButton = formElement.querySelector(this._config.submitButtonSelector);
        this._inactiveButton = config.inactiveButtonClass;
        this._error = config.errorClass;
        this._inputError = config.inputErrorClass;
        this._formElement = formElement;
        this._inputs = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    }

    _showInputError(inputElement) {
        const span = this._formElement.querySelector(`.${this._input.id}-error`);
        inputElement.classList.add(this._inputError);
        span.classList.add(this._error);
        span.textContent = this._input.validationMessage;
        console.log(this._input.validationMessage)
    }

    _hideInputError(inputElement) {
        const span = this._formElement.querySelector(`.${this._input.id}-error`);
        inputElement.classList.remove(this._inputError);
        span.textContent = '';
        span.classList.remove(this._error);
    }

    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement)
        } else {
            this._hideInputError(inputElement)
        }
    }

    _hasInvalidValue() {
        console.log(this._inputs.some(inputElement => !inputElement.validity.valid))
        return this._inputs.some(inputElement => !inputElement.validity.valid);
    }

    _toggleButtonState() {
        console.log(this._submitButton)
        if(this._hasInvalidValue()) {
            this.disableSubmitButton()
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
        this._formElement.addEventListener('reset', () => {this._submitButton.disabled = true});
    }

    disableSubmitButton() {
        this._submitButton.classList.add(this._inactiveButton);
        this._submitButton.disabled = true;
    }

    enableValidation() {
        this._setEventListeners()
    }
}

export default FormValidator