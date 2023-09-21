(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}function n(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}const r=function(){function e(t,r){var o,i,u,c=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,u=function(e){var t=c._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(c._inputError),t.classList.add(c._error),t.textContent=e.validationMessage},(i=n(i="_showInputError"))in o?Object.defineProperty(o,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[i]=u,this._submitButton=r.querySelector(t.submitButtonSelector),this._inactiveButton=t.inactiveButtonClass,this._error=t.errorClass,this._inputError=t.inputErrorClass,this._formElement=r,this._inputs=Array.from(r.querySelectorAll(t.inputSelector))}var r,o;return r=e,(o=[{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputError),t.classList.remove(this._error),t.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidValue",value:function(){return this._inputs.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidValue()?this._disableSubmitButton():(this._submitButton.classList.remove(this._inactiveButton),this._submitButton.disabled=!1)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"setInitialState",value:function(){var e=this;this._inputs.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"_disableSubmitButton",value:function(){this._submitButton.classList.add(this._inactiveButton),this._submitButton.disabled=!0}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&t(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var u=function(){function e(t,n,r,o,i,u,c,l){var a=t.name,s=t.link,f=t._id,p=t.owner,y=t.likes;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=a,this._link=s,this._id=f,this._owner=p,this._likes=y,this._userId=c,this._api=l,this._handleLikeClick=r,this._handleLikeDelete=o,this._templateSelector=n,this._handleCardClick=i,this._handleConfirmDelete=u}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_handleImageCard",value:function(){var e=this;this._newCardElement.querySelector(".element__image-button").addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"_setListeners",value:function(){var e=this;this._newCardElement.querySelector(".element__delete-button").addEventListener("click",(function(){e._handleConfirmDelete()})),this._newCardElement.querySelector(".element__like-button").addEventListener("click",(function(){e._handleLike()})),this._newCardElement.querySelector(".element__image").addEventListener("click",(function(){e._handleImageCard()}))}},{key:"remove",value:function(){this._newCardElement.remove(),this._newCardElement=null}},{key:"_checkDeleteButton",value:function(){var e=this._newCardElement.querySelector(".element__delete-button");this._userId!==this._owner._id&&(e.style.display="none")}},{key:"_handleLike",value:function(){this._cardLikeButton=this._newCardElement.querySelector(".element__like-button"),this._cardLikeButton.classList.contains("element__like-button_active")?this._handleLikeDelete(this._id):this._handleLikeClick(this._id)}},{key:"_setLikes",value:function(){this.cardLikeCount=this._newCardElement.querySelector(".element__like-counter"),this.cardLikeCount.textContent=this._likes.length}},{key:"_checkLikeButton",value:function(){var e=this;this._cardLikeButton=this._newCardElement.querySelector(".element__like-button"),this._likes.forEach((function(t){t._id===e._userId&&e._cardLikeButton.classList.add("element__like-button_active")}))}},{key:"addLike",value:function(){this._cardLikeButton=this._newCardElement.querySelector(".element__like-button"),this._cardLikeButton.classList.add("element__like-button_active"),this._likes.length+=1,this._setLikes()}},{key:"removeLike",value:function(){this._cardLikeButton=this._newCardElement.querySelector(".element__like-button"),this._cardLikeButton.classList.remove("element__like-button_active"),this._likes.length-=1,this._setLikes()}},{key:"getView",value:function(){return this._newCardElement=this._getTemplate(),this._newCardElement.querySelector(".element__image").src=this._link,this._newCardElement.querySelector(".element__image").alt=this._name,this._newCardElement.querySelector(".element__title").textContent=this._name,this._checkLikeButton(),this._checkDeleteButton(),this._setLikes(),this._setListeners(),this._newCardElement}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const c=u;function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}const s=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}const y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this),this._closeButton=this._popup.querySelector(".popup__close-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.currentTarget!==t.target&&t.target!==e._closeButton||e.close()}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}const b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._description=t._popup.querySelector(".popup__description"),t}return t=u,(n=[{key:"open",value:function(e,t){d(v(u.prototype),"open",this).call(this),this._image.src=t,this._image.alt=e,this._description.textContent=e}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}const L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n,r=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=e.querySelector(".popup__form"),n._submitButton=n._form.querySelector(".popup__submit-button"),n._submitForm=r,n._inputs=Array.from(n._popup.querySelectorAll(".popup__input")),n._buttonDeleteText=n._submitButton.textContent,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._values={},this._inputs.forEach((function(t){e._values[t.name]=t.value})),this._values}},{key:"setEventListeners",value:function(){var e=this;g(E(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){return e._submitForm(e._getInputValues(),t)}))}},{key:"close",value:function(){g(E(u.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":this._buttonDeleteText}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==C(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=e.querySelector(".popup__form"),t._buttonDelete=t._form.querySelector(".popup__submit-button"),t._buttonDeleteText=t._buttonDelete.textContent,t}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;j(q(u.prototype),"setEventListeners",this).call(this),this._buttonDelete.addEventListener("click",(function(t){t.preventDefault(),e._handleCallback()}))}},{key:"setAction",value:function(e){this._handleCallback=e}},{key:"renderLoading",value:function(e){this._buttonDelete.textContent=e?"Сохранение...":this._buttonDeleteText}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}const R=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t),this._description=document.querySelector(n),this._avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,description:this._description.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e,t){this._name.textContent=e,this._description.textContent=t}},{key:"setUserAvatar",value:function(e){this._avatar.src=e}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==D(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}const A=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"getAllCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(e){if(e.ok)return e.json();throw new Error("Что-то пошло не так...")})).catch((function(e){console.log(e)}))}},{key:"createCards",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Что-то пошло не так...")})).catch((function(e){console.log(e)}))}},{key:"deleteCards",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){if(e.ok)return e.json();throw new Error("Что-то пошло не так...")})).catch((function(e){console.log(e)}))}},{key:"getProfileInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){if(e.ok)return e.json();throw new Error("Что-то пошло не так...")})).catch((function(e){console.log(e)}))}},{key:"setProfileInfo",value:function(e,t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.value,about:t.value})})}},{key:"setProfileAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.value})})}},{key:"addLikeClick",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers})}},{key:"deleteLikeClick",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers})}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();var V,F=document.querySelector(".profile__edit-button"),U=document.querySelector(".profile__avatar-button"),N=document.querySelector(".popup_type_profile"),J=document.querySelector(".popup_type_avatar"),G=N.querySelector(".popup__form"),H=J.querySelector(".popup__form"),z=H.querySelector(".popup__input_avatar"),M=G.querySelector(".popup__input_name"),K=G.querySelector(".popup__input_description"),Q=document.querySelector(".profile__add-button"),W=document.querySelector(".popup_type_content"),X=W.querySelector(".popup__form"),Y=document.querySelector(".popup_type_image"),Z=document.querySelector(".popup_type_confirm"),$={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},ee=new A({url:"https://mesto.nomoreparties.co/v1/cohort-75",headers:{authorization:"de840de0-da05-4c0b-8b96-55f691e0c5a8","Content-Type":"application/json"}});ee.getProfileInfo().then((function(e){V=e._id}));var te=new R(".profile__name",".profile__description",".profile__image"),ne=new B(Z);ne.setEventListeners();var re=function(e){var t=new c(e,"#element__template",(function(e){ee.addLikeClick(e).then((function(){t.addLike()})).catch((function(e){console.log(e)}))}),(function(e){ee.deleteLikeClick(e).then((function(){t.removeLike()})).catch((function(e){console.log(e)}))}),pe,(function(){ne.setAction((function(){ne.renderLoading(!0),ee.deleteCards(e._id).then((function(){t.remove(),ne.close()})).catch((function(e){return console.log(e)})).finally((function(){return ne.renderLoading(!1)}))})),ne.open()}),V,ee),n=t.getView();oe.addItem(n)},oe=new s({renderer:function(e){re(e)}},".elements__list");ee.getAllCards().then((function(e){e.forEach((function(e){re(e)}))}));var ie=new L(J,{submitForm:function(e,t){t.preventDefault(),ee.setProfileAvatar(z).then((function(){})).finally((function(){return ie.renderLoading(!1)})),ie.renderLoading(!0),te.setUserAvatar(z.value),ie.close()}});ie.setEventListeners();var ue=new r($,H);ue.enableValidation(),U.addEventListener("click",(function(){ie.open(),ee.getProfileInfo().then((function(e){z.value=e.avatar,ue.setInitialState()}))}));var ce=new L(N,{submitForm:function(e,t){t.preventDefault(),ee.setProfileInfo(M,K).then((function(){})).finally((function(){return ce.renderLoading(!1)})),ce.renderLoading(!0),te.setUserInfo(M.value,K.value),ce.close()}});ce.setEventListeners();var le=new r($,G);le.enableValidation(),F.addEventListener("click",(function(){ce.open(),le.setInitialState(),ee.getProfileInfo().then((function(e){M.value=e.name,K.value=e.about}))}));var ae=new L(W,{submitForm:function(e,t){t.preventDefault();var n={name:e.title,link:e.photo};ee.createCards(n).then((function(e){re(e)})).finally((function(){return ae.renderLoading(!1)})),ae.renderLoading(!0),ae.close()}});ae.setEventListeners();var se=new r($,X);se.enableValidation(),Q.addEventListener("click",(function(){ae.open(),se.setInitialState()}));var fe=new b(Y);function pe(e,t){fe.open(e,t)}fe.setEventListeners()})();