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
      ? this.getSearchResultsHTML(resultData)
      : RESULT_VIEW_MESSAGES.NO_RESULT;
    this.show();
  }

  getSearchResultsHTML(resultData) {
    return `<ul> ${resultData.map(this.getSearchItemHTML).join('')} </ul>`;
  }

  getSearchItemHTML(resultItem) {
    return `<li id=${resultItem.id}>
        <img src=${resultItem.image} alt=${resultItem.name}>
        <span>${resultItem.name}</span>
      </li>`;
  }
}
