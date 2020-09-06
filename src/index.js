import _ from 'lodash';
import printMe from './print.js';
import numRef from './ref.json';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

export function numToWord(num) {
  return _.reduce(numRef, (accum, ref) => {
    return ref.num === num ? ref.word : accum;
  }, '');
}

export function wordToNum(word) {
  return _.reduce(numRef, (accum, ref) => {
    return ref.word === word && word.toLowerCase() ? ref.num : accum;
  }, -1);
}

async function getAsyncComponent() {

  const element = document.createElement('div');
  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;

}

function component() {
  
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
 
}

function getComponent() {
  
  const element = document.createElement('div');
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
      const element = document.createElement('div');
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      return element;
  }).catch(error => 'An error occurred while loading the component');

}

// getAsyncComponent().then(component => {
//   document.body.appendChild(component);
// })

document.body.appendChild(component());