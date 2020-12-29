import KeywordView from './KeywordView.js';

export default class HistoryView extends KeywordView {
  getKeywordsHTML(histories) {
    return `<ul class="list">${histories
      .map(
        (history) =>
          `<li data-keyword=${history.keyword}>
            ${history.keyword}
          <span class="date">${history.date}</span>
          <button class="btn-remove"></button>
          </li>`
      )
      .join('')}</ul>`;
  }
}
