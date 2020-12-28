import View from './View.js';
import { KEYBOARD } from '../utils/constants.js';

const tag = `[SearchForm]`;
export default class InputSearchFormView extends View {
  setup($element) {
    this.init($element);
    this.$searchInput = this.$element.querySelector('#search-input');
    this.$searchResetBtn = this.$element.querySelector('.btn-reset');
    this.bindEvents();
    this.showResetBtn(false);
    return this;
  }

  showResetBtn(show = true) {
    this.$searchResetBtn.style.display = show ? 'block' : 'none';
  }

  resetInputValue() {
    this.$searchInput.value = '';
    this.showResetBtn(this.$searchInput.value.length);
  }

  bindEvents() {
    this.$searchInput.addEventListener('keydown', (e) => this.onSubmitInputWordHandler(e));
    this.$searchResetBtn.addEventListener('click', () => this.onResetSearchWordHandler());
  }

  onSubmitInputWordHandler(e) {
    this.showResetBtn(this.$searchInput.value.length);
    if (!this.$searchInput.value.length) {
      this.emit('resetSearchResult');
    }
    if (e.key !== KEYBOARD.ENTER) {
      return;
    }
    this.emit('submitInput', this.$searchInput.value);
  }

  onResetSearchWordHandler() {
    this.resetInputValue();
    this.emit('resetSearchResult');
  }
}
