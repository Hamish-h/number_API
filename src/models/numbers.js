const PubSub = require('../helpers/pub_sub.js');

const Numbers = function() {
  this.text = null;
}

Numbers.prototype.bindEvents = function () {
  PubSub.subscribe('NumberFormView:submit', (evt) => {
    const numberToFind = evt.detail;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://numbersapi.com/${numberToFind}?json`);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.addEventListener('load', () => {
      if (xhr.status !== 200) {
        console.err(xhr.status);
        return;
      }
      const jsonString = xhr.responseText;
      const data = JSON.parse(jsonString);
      this.text = data.text;
       PubSub.publish('Number:number-loaded', this.text);
    });
    xhr.send();
  });
};

//
// Numbers.prototype.get = function (onComplete) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', this.url);
//   xhr.setRequestHeader('Accept', 'application/json');
//   xhr.addEventListener('load', () => {
//     if(xhr.status !== 200){
//       console.error(xhr.status);
//       return;
//     }
//     const jsonString = xhr.responseText;
//     const data = JSON.parse(jsonString);
//
//     onComplete(data);
//   });
//   xhr.send();
//
// };
  // xhr.send();



module.exports = Numbers;
