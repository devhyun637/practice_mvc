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

  bindRemoveHistoryEvent() {
    Array.from(this.$element.querySelectorAll('.btn-remove')).forEach((history) =>
      history.addEventListener('click', (e) => {
        e.stopPropagation();
        this.onRemoveHistoryHandler(e.target.closest('li').dataset.keyword);
      })
    );
  }

  onRemoveHistoryHandler(historyName) {
    this.emit('clickRemoveHistory', historyName);
  }
}
