class Api {
  constructor(options) {
    this._server = options.baseUrl;
    this._headers = options.headers;
  }
  _getResponseData(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }
  getServerData() {
    return fetch(`${this._server}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then((res) => this._getResponseData(res))
  }
  getCardsData() {
    return fetch(`${this._server}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then((res) => this._getResponseData(res))
  }
  patchProfileData(input) {
    return fetch(`${this._server}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: input.name,
        about: input.about,
        avatar: input.url
      })
    })
      .then((res) => this._getResponseData(res))
  }
  postCard(input) {
    return fetch(`${this._server}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: input.name,
        link: input.url
      })
    })
      .then((res) => this._getResponseData(res))
  }
  deleteCard(id) {
    return fetch(`${this._server}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => this._getResponseData(res))
  }
  putLike(id) {
    return fetch(`${this._server}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then((res) => this._getResponseData(res))
  }
  putDislike(id) {
    return fetch(`${this._server}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => this._getResponseData(res))
  }
  patchProfileAvatar(input) {
    return fetch(`${this._server}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: input.url
      })
    })
      .then((res) => this._getResponseData(res))
  }
  changeLikeCardStatus(id, like) {
    if (!like) {
      return this.putLike(id);
    }
    else {
      return this.putDislike(id);
    }
  }
}

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-44',
  headers: {
    authorization: '17e41917-a2e7-4ed8-bcef-86b0aad6a6d8',
    'Content-Type': 'application/json'
  }
});

export {api};
