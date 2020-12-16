import SearchForm from '../views/SearchForm.js';
import ResultView from '../views/ResultView.js';
import SearchModel from '../models/SearchModel.js';

const tag = `[MainController]`;
export default class MainController {
  init() {
    new SearchForm()
      .setup(document.querySelector('#search-input-container'))
      .on('submitInput', (e) => this.onSubmitSearchInput(e.detail));

    this.resultForm = new ResultView().setup(document.querySelector('.content'));
  }

  searchWords(resultWords) {
    console.log(`${tag} searchWords`);
    // 검색 결과 가져오기
    SearchModel.list(resultWords).then((data) => {
      this.resultForm.render(data);
    });
  }

  onSubmitSearchInput(resultWords) {
    console.log(`${tag} onSubmitSearchInput`);
    this.searchWords(resultWords);
  }
}
