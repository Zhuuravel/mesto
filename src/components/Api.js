class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    getAllCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Что-то пошло не так...')
            })
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
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Что-то пошло не так...')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    deleteCards(_id) {
        return fetch(`${this._url}/cards/${_id}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Что-то пошло не так...')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    getProfileInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Что-то пошло не так...')
            })
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
        });
    }

    setProfileAvatar(link) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: link.value
            })
        });
    }

    addLikeClick(_id) {
        return fetch(`${this._url}/cards/${_id}/likes`, {
            method: 'PUT',
            headers: this._headers,
        });
    }

    deleteLikeClick(_id) {
        return fetch(`${this._url}/cards/${_id}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        });
    }
}

export default Api