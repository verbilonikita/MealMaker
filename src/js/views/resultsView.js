import View from './view.js';

class Results extends View {
  _parentElement = document.querySelector('.results');
  _data;
  _message = 'Please choose another food type!';

  _generateMarkup() {
    // console.log(this._data.map(this._generateMarkupPreview).join(''));
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    return `
      <li class="preview">
    <a class="preview__link preview__link--active" href="#${result.recipe_id}">
      <figure class="preview__fig">
        <img src="${result.image_url}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${result.title}</h4>
        <p class="preview__publisher">${result.publisher}</p>
        <div class="preview__user-generated">
          <svg>
            <use href="src/img/icons.svg#icon-user"></use>
          </svg>
        </div>
      </div>
      </a>
      </li>
        `;
  }
}

export default new Results();
