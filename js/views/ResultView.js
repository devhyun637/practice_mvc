import View from './View.js';
import { RESULT_VIEW_MESSAGES } from '../utils/constants.js';

const tag = `[ResultForm]`;
export default class ResultView extends View {
  setup($element) {
    this.init($element);
    return this;
  }

  render(resultData = []) {
    this.$element.innerHTML = resultData.length
      ? this.getSearchResultHTML(resultData)
      : RESULT_VIEW_MESSAGES.NO_RESULT;
  }

  getSearchResultHTML(resultData) {
    return `${resultData.reduce(
      (html, item) => (html += this.getSearchItemHTML(item)),
      '<ul>'
    )}</ul>`;
  }

  getSearchItemHTML(resultItem) {
    return `<li>
        <img src=${resultItem.image} alt=${resultItem.name} />
        <span>${resultItem.name}</span>
      </li>`;
  }
}
