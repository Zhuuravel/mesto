import Section from "./Section";

class UserInfo{
    constructor(nameSelector, descriptionSelector) {
        this._nameSelector = document.querySelector(nameSelector);
        this._descriptionSelector = document.querySelector(descriptionSelector);
    }

    getUserInfo() {
        return {
            name: this._nameSelector.textContent,
            description: this._descriptionSelector.textContent
        }
    }

    setUserInfo({ name, description }) {
        this._nameSelector.textContent = name;
        this._descriptionSelector.textContent = description;
    }
}

export default UserInfo