import View from './view.js';
import previewView from './previewView.js';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    // console.log(this._data.map(this._generateMarkupPreview).join(''));
    return this._data
      .map(bookmark => previewView._generateMarkupPreview(bookmark))
      .join('');
  }
}

export default new BookmarksView();
