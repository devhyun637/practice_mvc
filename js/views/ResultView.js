import View from './View.js';
import { RESULT_VIEW_MESSAGES } from '../utils/constants.js';

const tag = `[ResultForm]`;
export default class ResultView extends View {
  setup($element) {
    this.init($element);
    return this;
  }

  render(resultData = []) {
    console.log(`${tag} render`);
    this.$element.innerHTML = resultData.length
      ? this.getSearchResultHTML(resultData)
      : RESULT_VIEW_MESSAGES.NO_RESULT;
  }

  getSearchResultHTML(resultData) {
    console.log(`${tag} getSearchResultHTML`);
    return `${resultData.reduce(
      (html, item) => (html += this.getSearchItemHTML(item)),
      '<ul>'
    )}</ul>`;
  }

  getSearchItemHTML(resultItem) {
    console.log(`${tag} getSearchItemHTML`);
    return `<li>
        <img src=${resultItem.image} alt=${resultItem.name} />
        <span>${resultItem.name}</span>
      </li>`;
  }
}
