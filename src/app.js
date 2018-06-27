const NumberFormView = require('./views/number_form_view');
const Numbers = require('./models/numbers');
const ResultView = require('./views/result_view');

document.addEventListener('DOMContentLoaded', () => {
  const numberForm = document.querySelector('form#number-form');
  const numberFact = document.querySelector('#number-fact');

  const numberFormView = new NumberFormView(numberForm);
  numberFormView.bindEvents();

  const numbers = new Numbers();
  numbers.bindEvents();
  
  const result = new ResultView(numberFact);
  result.bindEvents();
});
