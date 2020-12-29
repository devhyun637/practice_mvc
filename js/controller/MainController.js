import InputSearchFormView from '../views/InputSearchFormView.js';
import ResultView from '../views/ResultView.js';
import TabView from '../views/TabView.js';
import KeywordView from '../views/KeywordView.js';

import SearchModel from '../models/SearchModel.js';

import { TAB_NAME } from '../utils/constants.js';
import KeywordModel from '../models/KeywordModel.js';

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

    this.keywordView = new KeywordView()
      .setup(document.querySelector('#search-keyword'))
      .on('clickKeyword', (e) => this.onClickKeyword(e.detail));

    this.resultForm = new ResultView().setup(document.querySelector('#search-result'));

    const tabName = TAB_NAME.KEYWORD;
    this.renderViews(tabName);
  }

  renderViews(tabName) {
    console.log(`${tag} renderViews ${tabName}`);
    this.resultForm.hide();
    if (tabName === TAB_NAME.KEYWORD) {
      this.fetchKeywords();
    }
    this.tabView.setActiveTab(tabName);
  }

  fetchKeywords() {
    KeywordModel.list().then((data) => {
      this.keywordView.renderKeywordHTML(data);
    });
  }

  searchWords(resultWords) {
    SearchModel.list(resultWords).then((data) => {
      this.renderSearchResult(data);
    });
  }

  renderSearchResult(data) {
    this.tabView.hide();
    this.keywordView.hide();
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

  onClickKeyword(keywordName) {
    this.searchWords(keywordName);
  }
}
