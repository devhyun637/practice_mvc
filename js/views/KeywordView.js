import View from './View.js';
import { RESULT_VIEW_MESSAGES } from '../utils/constants.js';

const tag = `[KeywordView]`;
export default class KeywordView extends View {
  setup($element) {
    this.init($element);
    return this;
  }

  renderKeywordHTML(keywords = []) {
    this.$element.innerHTML = keywords.length
      ? this.getKeywordsHTML(keywords)
      : RESULT_VIEW_MESSAGES.NO_KEYWORD;
    this.bindClickEvent();
    this.show();
    return this;
  }

  getKeywordsHTML(keywords) {
    return `<ul class="list">${keywords
      .map(
        (keyword, index) =>
          `<li data-keyword=${keyword.keyword}>
          <span class="number">${index + 1}</span>
          ${keyword.keyword}
        </li>`
      )
      .join('')}</ul>`;
  }

  bindClickEvent() {
    Array.from(this.$element.querySelectorAll('li')).forEach((keyword) => {
      keyword.addEventListener('click', () => this.onClickKeywordHandler(keyword.dataset.keyword));
    });
  }

  onClickKeywordHandler(keywordName) {
    this.emit('clickKeyword', keywordName);
  }
}
