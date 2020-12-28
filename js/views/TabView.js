import View from './View.js';

const tag = `[TabView]`;
export default class TabView extends View {
  setup($element) {
    this.init($element);
    this.bindClickTabEvent();
    return this;
  }

  setActiveTab(tabName) {
    Array.from(this.$element.children).forEach((tab) => {
      tab.className = tab.innerHTML === tabName ? 'active' : '';
    });
  }

  bindClickTabEvent() {
    Array.from(this.$element.children).forEach((tab) => {
      tab.addEventListener('click', () => this.onChangeTabHandler(tab.innerHTML));
    });
  }

  onChangeTabHandler(tabName) {
    this.setActiveTab(tabName);
    this.emit('changeTab', tabName);
  }
}
