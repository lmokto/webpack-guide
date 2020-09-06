(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "dSPy":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return printMe; });
function printMe() {
  console.log('I get called from print.js!');
}


/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: numToWord, wordToNum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numToWord", function() { return numToWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wordToNum", function() { return wordToNum; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "dSPy");
/* harmony import */ var _ref_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ref.json */ "yUhc");
var _ref_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./ref.json */ "yUhc", 1);




function numToWord(num) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(_ref_json__WEBPACK_IMPORTED_MODULE_2__, (accum, ref) => {
    return ref.num === num ? ref.word : accum;
  }, '');
}

function wordToNum(word) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(_ref_json__WEBPACK_IMPORTED_MODULE_2__, (accum, ref) => {
    return ref.word === word && word.toLowerCase() ? ref.num : accum;
  }, -1);
}

async function getAsyncComponent() {

  const element = document.createElement('div');
  const { default: _ } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! lodash */ "LvDl", 7));

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;

}

function component() {
  
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_1__["default"];

  element.appendChild(btn);

  return element;
 
}

function getComponent() {
  
  const element = document.createElement('div');
  // Lodash, now imported by this script
  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack'], ' ');
    return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! lodash */ "LvDl", 7)).then(({ default: _ }) => {
      const element = document.createElement('div');
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      return element;
  }).catch(error => 'An error occurred while loading the component');

}

// getAsyncComponent().then(component => {
//   document.body.appendChild(component);
// })

document.body.appendChild(component());

/***/ }),

/***/ "yUhc":
/*!**********************!*\
  !*** ./src/ref.json ***!
  \**********************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"num\":1,\"word\":\"One\"},{\"num\":2,\"word\":\"Two\"},{\"num\":3,\"word\":\"Three\"},{\"num\":4,\"word\":\"Four\"},{\"num\":5,\"word\":\"Five\"},{\"num\":0,\"word\":\"Zero\"}]");

/***/ })

},[["tjUo","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJpbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QjtBQUNVO0FBQ0Q7O0FBRXpCO0FBQ1AsU0FBUyw2Q0FBQyxRQUFRLHNDQUFNO0FBQ3hCO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1AsU0FBUyw2Q0FBQyxRQUFRLHNDQUFNO0FBQ3hCO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0EsU0FBUyxhQUFhLFNBQVMsZ0dBQWlEOztBQUVoRjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHNCQUFzQiw2Q0FBQzs7QUFFdkI7QUFDQSxnQkFBZ0IsaURBQU87O0FBRXZCOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsNkNBQUM7QUFDdkIsV0FBVyxnR0FBaUQsUUFBUSxhQUFhO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUosdUMiLCJmaWxlIjoiYXBwLjhiNGRkZTk3NTA1NmFiZmE5YmNjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZSgpIHtcbiAgY29uc29sZS5sb2coJ0kgZ2V0IGNhbGxlZCBmcm9tIHByaW50LmpzIScpO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQuanMnO1xuaW1wb3J0IG51bVJlZiBmcm9tICcuL3JlZi5qc29uJztcblxuZXhwb3J0IGZ1bmN0aW9uIG51bVRvV29yZChudW0pIHtcbiAgcmV0dXJuIF8ucmVkdWNlKG51bVJlZiwgKGFjY3VtLCByZWYpID0+IHtcbiAgICByZXR1cm4gcmVmLm51bSA9PT0gbnVtID8gcmVmLndvcmQgOiBhY2N1bTtcbiAgfSwgJycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd29yZFRvTnVtKHdvcmQpIHtcbiAgcmV0dXJuIF8ucmVkdWNlKG51bVJlZiwgKGFjY3VtLCByZWYpID0+IHtcbiAgICByZXR1cm4gcmVmLndvcmQgPT09IHdvcmQgJiYgd29yZC50b0xvd2VyQ2FzZSgpID8gcmVmLm51bSA6IGFjY3VtO1xuICB9LCAtMSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFzeW5jQ29tcG9uZW50KCkge1xuXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgeyBkZWZhdWx0OiBfIH0gPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJsb2Rhc2hcIiAqLyAnbG9kYXNoJyk7XG5cbiAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd3ZWJwYWNrJ10sICcgJyk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG5cbn1cblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICBcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcblxuICBidG4uaW5uZXJIVE1MID0gJ0NsaWNrIG1lIGFuZCBjaGVjayB0aGUgY29uc29sZSEnO1xuICBidG4ub25jbGljayA9IHByaW50TWU7XG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuXG4gIHJldHVybiBlbGVtZW50O1xuIFxufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnQoKSB7XG4gIFxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vIExvZGFzaCwgbm93IGltcG9ydGVkIGJ5IHRoaXMgc2NyaXB0XG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xuICAgIHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJsb2Rhc2hcIiAqLyAnbG9kYXNoJykudGhlbigoeyBkZWZhdWx0OiBfIH0pID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0pLmNhdGNoKGVycm9yID0+ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2FkaW5nIHRoZSBjb21wb25lbnQnKTtcblxufVxuXG4vLyBnZXRBc3luY0NvbXBvbmVudCgpLnRoZW4oY29tcG9uZW50ID0+IHtcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xuLy8gfSlcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==