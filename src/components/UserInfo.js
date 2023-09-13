class UserInfo {
    constructor(name, description) {
        this._name = document.querySelector(name);
        this._description = document.querySelector(description);
    }

    getUserInfo() {
        return {
            name: this._name,
            description: this._description
        }
    }

    setUserInfo(name, description) {
        this._name.textContent = name;
        this._description.textContent = description;
    }
}

export default UserInfo