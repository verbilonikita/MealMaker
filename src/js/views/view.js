export default class View {
  //initial parent class

  //rendering data from data passed in

  render(data) {
    this._data = data;
    const markup = this._generateMarkup(data);
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  //spinner

  renderSpinner() {
    const markup = `
    <div class="spinner">
            <svg>
              <use href="src/img/icons.svg#icon-loader"></use>
            </svg>
    </div>
    `;
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  //clearing parent element

  _clear() {
    this._parentElement.innerHTML = '';
  }

  //rendering error

  renderError(message = this._message) {
    const markup = `
                <div class="error">
                <div>
                  <svg>
                    <use href="src/img/icons.svg#icon-alert-triangle"></use>
                  </svg>
                </div>
                <p>${message}</p>
                </div>
              `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
