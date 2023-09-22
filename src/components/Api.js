class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _checkResponse(res) {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Что-то пошло не так...')
    }

    getAllCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._checkResponse)
            .catch((err) => {
                console.log(err);
            })
    }

    createCards(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data)
        })
            .then(this._checkResponse)
            .catch((err) => {
                console.log(err);
            })
    }

    deleteCards(_id) {
        return fetch(`${this._url}/cards/${_id}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkResponse)
            .catch((err) => {
                console.log(err);
            })
    }

    getProfileInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._checkResponse)
            .catch((err) => {
                console.log(err);
            })
    }

    setProfileInfo(name, description) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name.value,
                about: description.value
            })
        })
            .then(this._checkResponse)
            .catch((err) => {
                console.log(err);
            })
    }

    setProfileAvatar(link) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: link.value
            })
        })
            .then(this._checkResponse)
            .catch((err) => {
                console.log(err);
            })
    }

    addLikeClick(_id) {
        return fetch(`${this._url}/cards/${_id}/likes`, {
            method: 'PUT',
            headers: this._headers,
        })
            .then(this._checkResponse)
            .catch((err) => {
                console.log(err);
            })
    }

    deleteLikeClick(_id) {
        return fetch(`${this._url}/cards/${_id}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(this._checkResponse)
            .catch((err) => {
                console.log(err);
            })
    }
}

export default Api