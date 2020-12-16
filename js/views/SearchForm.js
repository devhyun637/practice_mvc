import View from './View.js';
import KEYBOARD from '../utils/constants.js';

const tag = `[SearchForm]`;
export default class SearchForm extends View {
  setup($element) {
    this.init($element);
    this.$searchInput = this.$element.querySelector('#search-input');
    this.$searchResetBtn = this.$element.querySelector('.btn-reset');
    this.bindEvent();
    this.showResetBtn(false);
    return this;
  }

  showResetBtn(show = true) {
    this.$searchResetBtn.style.display = show ? 'block' : 'none';
  }

  bindEvent() {
    this.$searchInput.addEventListener('keyup', (e) => this.onSubmitSearchWordHandler(e));
    this.$searchResetBtn.addEventListener('click', () => this.onResetSearchWordHandler());
  }

  onSubmitSearchWordHandler(e) {
    this.showResetBtn(true);
    if (!this.$searchInput.value.length) {
      this.onResetSearchWordHandler();
    }
    if (e.key !== KEYBOARD.ENTER) {
      return;
    }
    this.emit('submitInput', this.$searchInput.value);
  }

  onResetSearchWordHandler() {
    this.showResetBtn(false);
    this.$searchInput.value = '';
  }
}
