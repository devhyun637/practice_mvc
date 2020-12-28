import InputSearchFormView from '../views/InputSearchFormView.js';
import ResultView from '../views/ResultView.js';
import TabView from '../views/TabView.js';

import SearchModel from '../models/SearchModel.js';

const tag = `[MainController]`;
export default class MainController {
  init() {
    new InputSearchFormView()
      .setup(document.querySelector('#search-input-container'))
      .on('submitInput', (e) => this.onSubmitSearchInput(e.detail))
      .on('resetSearchResult', () => this.onResetSearchResult());

    this.tabView = new TabView()
      .setup(document.querySelector('#tabs'))
      .on('changeTab', (e) => this.onChangeClickTab(e.detail));

    this.resultForm = new ResultView().setup(document.querySelector('#search-result'));

    const tabName = '추천 검색어';
    this.renderViews(tabName);
  }

  renderViews(tabName) {
    console.log(`${tag} renderViews ${tabName}`);
    this.resultForm.hide();
    this.tabView.setActiveTab(tabName);
  }

  searchWords(resultWords) {
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

  onChangeClickTab(tabName) {
    console.log(`${tag} onChangeClickTab ${tabName}`);
  }
}
