class UserInfo {
    constructor(name, description, avatar) {
        this._name = document.querySelector(name);
        this._description = document.querySelector(description);
        this._avatar = document.querySelector(avatar);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            description: this._description.textContent,
            avatar: this._avatar.src
        }
    }

    setUserInfo(name, description) {
        this._name.textContent = name;
        this._description.textContent = description;
    }

    setUserAvatar(avatar) {
        this._avatar.src = avatar
    }
}

export default UserInfo