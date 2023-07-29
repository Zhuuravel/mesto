function enableValidation(config) {

    const showInputError = (form, input) => {
        input.classList.add(config.inputErrorClass)
    }

    const hideInputError = (form, input) => {
        input.classList.remove(config.inputErrorClass)
    }

    const isValid = (form, input)  => {
        if (!input.validity.valid) {
            showInputError(form, input)
        } else {
            hideInputError(form, input)
        }
    }

    const setEventListeners = (form) => {
        const inputs = Array.from(document.querySelectorAll(config.inputSelector))
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                isValid(form, input)
            })
        })
    }

    const forms = Array.from(document.querySelectorAll(config.formSelector))
    forms.forEach(form => {
        setEventListeners(form)
    })
}