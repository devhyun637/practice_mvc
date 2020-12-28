import View from './View.js';

const tag = `[TabView]`;
export default class TabView extends View {
  setup($element) {
    this.init($element);
    return this;
  }

  setActiveTab(tabName) {
    Array.from(this.$element.children).forEach((tab) => {
      tab.className = tab.innerHTML === tabName ? 'active' : '';
    });
  }
}
