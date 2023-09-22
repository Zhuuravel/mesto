(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}const r=function(){function t(e,r){var o,i,u,c=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,u=function(t){var e=c._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(c._inputError),e.classList.add(c._error),e.textContent=t.validationMessage},(i=n(i="_showInputError"))in o?Object.defineProperty(o,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[i]=u,this._submitButton=r.querySelector(e.submitButtonSelector),this._inactiveButton=e.inactiveButtonClass,this._error=e.errorClass,this._inputError=e.inputErrorClass,this._formElement=r,this._inputs=Array.from(r.querySelectorAll(e.inputSelector))}var r,o;return r=t,(o=[{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputError),e.classList.remove(this._error),e.textContent=""}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_hasInvalidValue",value:function(){return this._inputs.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidValue()?this._disableSubmitButton():(this._submitButton.classList.remove(this._inactiveButton),this._submitButton.disabled=!1)}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputs.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleButtonState()}))}))}},{key:"setInitialState",value:function(){var t=this;this._inputs.forEach((function(e){t._hideInputError(e)})),this._toggleButtonState()}},{key:"_disableSubmitButton",value:function(){this._submitButton.classList.add(this._inactiveButton),this._submitButton.disabled=!0}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var u=function(){function t(e,n,r,o,i,u,c){var a=e.name,l=e.link,s=e._id,f=e.owner,p=e.likes;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=a,this._link=l,this._id=s,this._owner=f,this._likes=p,this._userId=c,this._handleLikeClick=r,this._handleLikeDelete=o,this._templateSelector=n,this._handleCardClick=i,this._handleConfirmDelete=u}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setListeners",value:function(){var t=this;this._cardDeleteButton.addEventListener("click",(function(){t._handleConfirmDelete()})),this._cardLikeButton.addEventListener("click",(function(){t._handleLike()})),this._cardImageButton.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"remove",value:function(){this._newCardElement.remove(),this._newCardElement=null}},{key:"_checkDeleteButton",value:function(){this._userId!==this._owner._id?this._cardDeleteButton.style.display="none":this._cardDeleteButton.style.display="block"}},{key:"_handleLike",value:function(){this._cardLikeButton.classList.contains("element__like-button_active")?this._handleLikeDelete(this._id):this._handleLikeClick(this._id)}},{key:"_setLikes",value:function(){this._cardLikeCount.textContent=this._likes.length}},{key:"_checkLikeButton",value:function(){var t=this;this._likes.forEach((function(e){e._id===t._userId&&t._cardLikeButton.classList.add("element__like-button_active")}))}},{key:"addLike",value:function(t){this._cardLikeButton.classList.add("element__like-button_active"),this._setLikes()}},{key:"removeLike",value:function(){this._cardLikeButton.classList.remove("element__like-button_active"),this._setLikes()}},{key:"getView",value:function(){return this._newCardElement=this._getTemplate(),this._cardLikeButton=this._newCardElement.querySelector(".element__like-button"),this._cardDeleteButton=this._newCardElement.querySelector(".element__delete-button"),this._cardImageButton=this._newCardElement.querySelector(".element__image"),this._cardLikeCount=this._newCardElement.querySelector(".element__like-counter"),this._newCardElement.querySelector(".element__image").src=this._link,this._newCardElement.querySelector(".element__image").alt=this._name,this._newCardElement.querySelector(".element__title").textContent=this._name,this._checkLikeButton(),this._checkDeleteButton(),this._setLikes(),this._setListeners(),this._newCardElement}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const c=u;function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}const s=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}const y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=e,this._handleEscClose=this._handleEscClose.bind(this),this._closeButton=this._popup.querySelector(".popup__close-button")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){e.currentTarget!==e.target&&e.target!==t._closeButton||t.close()}))}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}const b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(r);if(o){var n=m(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popup.querySelector(".popup__image"),e._description=e._popup.querySelector(".popup__description"),e}return e=u,(n=[{key:"open",value:function(t,e){_(m(u.prototype),"open",this).call(this),this._image.src=e,this._image.alt=t,this._description.textContent=t}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}const L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(r);if(o){var n=E(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.submitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=t.querySelector(".popup__form"),n._submitButton=n._form.querySelector(".popup__submit-button"),n._submitForm=r,n._inputs=Array.from(n._popup.querySelectorAll(".popup__input")),n._buttonDeleteText=n._submitButton.textContent,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._values={},this._inputs.forEach((function(e){t._values[e.name]=e.value})),this._values}},{key:"setEventListeners",value:function(){var t=this;k(E(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){return t._submitForm(t._getInputValues(),e)}))}},{key:"close",value:function(){k(E(u.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(t){this._submitButton.textContent=t?"Сохранение...":this._buttonDeleteText}},{key:"setInputValues",value:function(t){this._inputs.forEach((function(e){e.value=t[e.name]}))}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},P.apply(this,arguments)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(o){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._form=t.querySelector(".popup__form"),e._buttonDelete=e._form.querySelector(".popup__submit-button"),e._buttonDeleteText=e._buttonDelete.textContent,e}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;P(B(u.prototype),"setEventListeners",this).call(this),this._buttonDelete.addEventListener("click",(function(e){e.preventDefault(),t._handleCallback()}))}},{key:"setAction",value:function(t){this._handleCallback=t}},{key:"renderLoading",value:function(t){this._buttonDelete.textContent=t?"Сохранение...":this._buttonDeleteText}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}const R=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(e),this._description=document.querySelector(n),this._avatar=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,description:this._description.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(t,e){this._name.textContent=t,this._description.textContent=e}},{key:"setUserAvatar",value:function(t){this._avatar.src=t}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}const A=function(){function t(e){var n=e.url,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=n,this._headers=r}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){if(t.ok)return t.json();throw new Error("Что-то пошло не так...")}},{key:"getAllCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse).catch((function(t){console.log(t)}))}},{key:"createCards",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(t)}).then(this._checkResponse).catch((function(t){console.log(t)}))}},{key:"deleteCards",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._checkResponse).catch((function(t){console.log(t)}))}},{key:"getProfileInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse).catch((function(t){console.log(t)}))}},{key:"setProfileInfo",value:function(t,e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.value,about:e.value})}).then(this._checkResponse).catch((function(t){console.log(t)}))}},{key:"setProfileAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.value})}).then(this._checkResponse).catch((function(t){console.log(t)}))}},{key:"addLikeClick",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse).catch((function(t){console.log(t)}))}},{key:"deleteLikeClick",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse).catch((function(t){console.log(t)}))}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();var V=document.querySelector(".profile__edit-button"),U=document.querySelector(".profile__avatar-button"),F=document.querySelector(".popup_type_profile"),N=document.querySelector(".popup_type_avatar"),J=F.querySelector(".popup__form"),G=N.querySelector(".popup__form"),H=G.querySelector(".popup__input_avatar"),M=J.querySelector(".popup__input_name"),z=J.querySelector(".popup__input_description"),$=document.querySelector(".profile__add-button"),K=document.querySelector(".popup_type_content"),Q=K.querySelector(".popup__form"),W=document.querySelector(".popup_type_image"),X=document.querySelector(".popup_type_confirm"),Y={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};function Z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var tt,et=new A({url:"https://mesto.nomoreparties.co/v1/cohort-75",headers:{authorization:"de840de0-da05-4c0b-8b96-55f691e0c5a8","Content-Type":"application/json"}});Promise.all([et.getProfileInfo(),et.getAllCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return Z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];tt=o._id,nt.setUserInfo(o.name,o.about),nt.setUserAvatar(o.avatar),i.reverse().forEach((function(t){ot(t)}))})).catch((function(t){console.log(t)}));var nt=new R(".profile__name",".profile__description",".profile__image"),rt=new T(X);rt.setEventListeners();var ot=function(t){var e=new c(t,"#element__template",(function(t){et.addLikeClick(t).then((function(t){e.addLike(t)})).catch((function(t){console.log(t)}))}),(function(t){et.deleteLikeClick(t).then((function(t){e.removeLike(t)})).catch((function(t){console.log(t)}))}),yt,(function(){rt.setAction((function(){rt.renderLoading(!0),et.deleteCards(t._id).then((function(){e.remove(),rt.close()})).catch((function(t){return console.log(t)})).finally((function(){return rt.renderLoading(!1)}))})),rt.open()}),tt),n=e.getView();it.addItem(n)},it=new s({renderer:function(t){ot(t)}},".elements__list"),ut=new L(N,{submitForm:function(t,e){e.preventDefault(),et.setProfileAvatar(H).then((function(){nt.setUserAvatar(H.value),ut.close()})).finally((function(){return ut.renderLoading(!1)})),ut.renderLoading(!0)}});ut.setEventListeners();var ct=new r(Y,G);ct.enableValidation(),U.addEventListener("click",(function(){ut.open(),ut.setInputValues(nt.getUserInfo()),ct.setInitialState()}));var at=new L(F,{submitForm:function(t,e){e.preventDefault(),et.setProfileInfo(M,z).then((function(){nt.setUserInfo(M.value,z.value),at.close()})).finally((function(){return at.renderLoading(!1)})),at.renderLoading(!0)}});at.setEventListeners();var lt=new r(Y,J);lt.enableValidation(),V.addEventListener("click",(function(){at.open(),lt.setInitialState(),at.setInputValues(nt.getUserInfo())}));var st=new L(K,{submitForm:function(t,e){e.preventDefault();var n={name:t.title,link:t.photo};et.createCards(n).then((function(t){ot(t),st.close()})).finally((function(){return st.renderLoading(!1)})),st.renderLoading(!0)}});st.setEventListeners();var ft=new r(Y,Q);ft.enableValidation(),$.addEventListener("click",(function(){st.open(),ft.setInitialState()}));var pt=new b(W);function yt(t,e){pt.open(t,e)}pt.setEventListeners()})();