import View from './view.js';

class Pagination extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('button');
      if (!btn) return;
      const { goto: goToPage } = btn.dataset;
      handler(+goToPage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const page = this._data.page;
    if (page === 1 && numPages > 1) {
      return `
          <button data-goto='${
            page + 1
          }' class="btn--inline pagination__btn--next">
            <span>Page ${page + 1}</span>
            <svg class="search__icon">
            <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }
    if (page === numPages && numPages > 1) {
      return `
            <button data-goto='${
              numPages - 1
            }' class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
            <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page ${numPages - 1}</span>
            </button>
      `;
    }
    if (page < numPages) {
      return `
          <button data-goto='${
            page + 1
          }' class="btn--inline pagination__btn--next">
            <span>Page ${page + 1}</span>
            <svg class="search__icon">
            <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </button>
          <button data-goto='${
            page - 1
          }' class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
            <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page ${page - 1}</span>
          </button>
      
      `;
    }
  }
}

export default new Pagination();
