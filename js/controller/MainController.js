import InputSearchFormView from '../views/InputSearchFormView.js';
import ResultView from '../views/ResultView.js';
import TabView from '../views/TabView.js';
import KeywordView from '../views/KeywordView.js';
import HistoryView from '../views/HistoryView.js';

import SearchModel from '../models/SearchModel.js';
import KeywordModel from '../models/KeywordModel.js';
import HistoryModel from '../models/HistoryModel.js';

import { TAB_NAME } from '../utils/constants.js';

const tag = `[MainController]`;
export default class MainController {
  init() {
    this.inputSearchFormview = new InputSearchFormView()
      .setup(document.querySelector('#search-input-container'))
      .on('submitInput', (e) => this.onSubmitSearchInput(e.detail))
      .on('resetSearchResult', () => this.onResetSearchResult());

    this.tabView = new TabView()
      .setup(document.querySelector('#tabs'))
      .on('changeTab', (e) => this.onChangeClickTab(e.detail));

    this.keywordView = new KeywordView()
      .setup(document.querySelector('#search-keyword'))
      .on('clickKeyword', (e) => this.onClickKeyword(e.detail));

    this.historyView = new HistoryView()
      .setup(document.querySelector('#search-history'))
      .on('clickKeyword', (e) => this.onClickHistory(e.detail))
      .on('clickRemoveHistory', (e) => this.onRemoveHistory(e.detail));

    this.resultForm = new ResultView().setup(document.querySelector('#search-result'));

    this.tabName = TAB_NAME.KEYWORD;
    this.renderViews(this.tabName);
  }

  renderViews(tabName) {
    console.log(`${tag} renderViews ${tabName}`);
    this.tabView.setActiveTab(tabName);

    if (tabName === TAB_NAME.KEYWORD) {
      this.fetchKeywords();
      this.historyView.hide();
    } else {
      this.fetchHistory();
      this.keywordView.hide();
    }

    this.resultForm.hide();
  }

  fetchKeywords() {
    KeywordModel.list().then((data) => {
      this.keywordView.renderKeywordHTML(data);
    });
  }

  fetchHistory() {
    HistoryModel.list().then((data) => {
      this.historyView.renderKeywordHTML(data).bindRemoveHistoryEvent();
    });
  }

  searchWords(resultWords) {
    this.inputSearchFormview.setInputValue(resultWords);
    HistoryModel.add(resultWords);
    SearchModel.list(resultWords).then((data) => {
      this.renderSearchResult(data);
    });
  }

  removeHistory(historyName) {
    HistoryModel.remove(historyName);
    this.renderViews(this.tabName);
  }

  renderSearchResult(data) {
    this.tabView.hide();
    this.keywordView.hide();
    this.historyView.hide();
    this.resultForm.render(data);
  }

  onSubmitSearchInput(resultWords) {
    this.searchWords(resultWords);
  }

  onResetSearchResult() {
    this.renderViews(this.tabName);
  }

  onChangeClickTab(tabName) {
    console.log(`${tag} onChangeClickTab ${tabName}`);
    this.tabName = tabName;
    this.renderViews(this.tabName);
  }

  onClickKeyword(keywordName) {
    this.searchWords(keywordName);
  }

  onClickHistory(historyName) {
    this.searchWords(historyName);
  }

  onRemoveHistory(historyName) {
    this.removeHistory(historyName);
  }
}
