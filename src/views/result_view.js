const PubSub = require('../helpers/pub_sub.js');
const ResultView = function(container) {
  this.container = container;
}

ResultView.prototype.bindEvents = function () {
    PubSub.subscribe('Number:number-loaded', (evt) => {
      this.render(evt.detail);
    });
};

ResultView.prototype.render = function (string) {
const p = document.createElement('p');
p.textContent = string;
this.container.innerHTML = '';
this.container.appendChild(p);
};

module.exports = ResultView;
