import SearchView from '../views/SearchView.js';
import ResultView from '../views/ResultView.js';
import SearchModel from '../models/SearchModel.js';

const tag = `[MainController]`;
export default class MainController {
  init() {
    new SearchView()
      .setup(document.querySelector('#search-input-container'))
      .on('submitInput', (e) => this.onSubmitSearchInput(e.detail))
      .on('resetSearchResult', () => this.onResetSearchResult());

    this.resultForm = new ResultView().setup(document.querySelector('.content'));
  }

  searchWords(resultWords) {
    // 검색 결과 가져오기
    SearchModel.list(resultWords).then((data) => {
      this.renderSearchResult(data);
    });
  }

  renderSearchResult(data) {
    this.resultForm.show();
    this.resultForm.render(data);
  }

  onSubmitSearchInput(resultWords) {
    this.searchWords(resultWords);
  }

  onResetSearchResult() {
    this.resultForm.hide();
  }
}
