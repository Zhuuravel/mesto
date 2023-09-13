class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._closeButton = this._popup.querySelector('.popup__close-button')
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close()
        }
    }

    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
            if ((evt.currentTarget === evt.target) || (evt.target === this._closeButton)) {
                this.close()
            }
        })
    }
}

export  default Popup