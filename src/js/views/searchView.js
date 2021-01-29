class SearchView {
  _parentElement = document.querySelector('.search');

  getQuery() {
    return this._parentElement.querySelector('input').value;
  }

  clearInput() {
    this._parentElement.querySelector('input').value = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
