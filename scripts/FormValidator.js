class FormValidator {
    constructor(config, form) {
        this._config = config
        this._form = form
    }

    _showInputError() {
        this._config.inputSelector.classList.add(this._config.inputErrorClass)
        const span = this._form.querySelector(`.${this._config.inputSelector.id}-error`)
        span.textContent = this._config.inputSelector.validationMessage
        span.classList.add(this._config.errorClass)
    }

    _hideInputError() {
        this._config.inputSelector.classList.remove(this._config.inputErrorClass)
        const span = this._form.querySelector(`.${this._config.inputSelector.id}-error`)
        span.textContent = ''
        span.classList.remove(this._config.errorClass)
    }

    _isValid() {
        if (!this._config.inputSelector.validity.valid) {
            this._showInputError()
        } else {
            this._hideInputError()
        }
    }

    _hasInvalidValue() {
        const inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector))
        return inputs.some(input => !input.validity.valid)
    }

    _toggleButtonState() {
        if(this._hasInvalidValue()) {
            this._config.submitButtonSelector.classList.add(this._config.inactiveButtonClass)
            this._config.submitButtonSelector.disabled = true
        } else {
            this._config.submitButtonSelector.classList.remove(this._config.inactiveButtonClass)
            this._config.submitButtonSelector.disabled = false
        }
    }

    _setEventListeners() {
        const inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector))
        this._toggleButtonState()
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                this._isValid()
                this._toggleButtonState()
            })
        })
    }

    enableValidation() {
        this._form._setEventListeners()
    }
}

export default FormValidator