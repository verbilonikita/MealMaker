import View from './view.js';

class AddRecipe extends View {
  _parentElement = document.querySelector('.upload');
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
  }

  //not in use anymore
  //   addHandlerUpload(handler) {
  //     this._parentElement.addEventListener('submit', e => {
  //       e.preventDefault();
  //       //formData must be destructured in ARR
  //       const dataArr = [...new FormData(this._parentElement)];
  //       //Then to make it easier we use FromEntries to get key:value
  //       const data = Object.fromEntries(dataArr);
  //       handler(data);
  //     });
  //   }
}

export default new AddRecipe();
