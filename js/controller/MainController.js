import SearchForm from '../views/SearchForm.js';

const tag = `[MainController]`;
export default class MainController {
  init() {
    new SearchForm()
      .setup(document.querySelector('#search-input-container'))
      .on('submitInput', (e) => this.onSubmitSearchInput(e));
  }

  onSubmitSearchInput(e) {
    console.log(`${tag} onSubmitSearchInput`);
    const resultWord = e.detail;
  }
}
