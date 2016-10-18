/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(6);

	var slideContents = [{
	  type: 'app',
	  h1: 'Create incredible apps.',
	  h3: 'smooth and quickly update with excellent performance.<br>makeing wonderful responsive user experience.',
	  btns: ['Get The Case', 'View More']
	}, {
	  type: 'function',
	  h1: 'plentiful functional web.',
	  h3: 'fuctional platform is still essensial in HTML5 model.<br>Do something easy office / homework just browser.',
	  btns: ['Check It Now', 'View More']
	}, {
	  type: 'sap',
	  h1: 'popular Single Page',
	  h3: 'most popular single page site, with vue / react / angular.<br>once created, run everywhere, that\'s it.',
	  btns: ['Check It Now', 'View More']
	}];
	var i = 0,
	    j = slideContents.length,
	    progress = false;
	setInterval(function () {
	  setSlideContent(1);
	}, 6000);
	function setSlideContent(l, k) {
	  if (progress) return 0;
	  progress = true;
	  i += l || 0;
	  if (k) i = k;
	  i == j ? i = 0 : 0;

	  var slide = document.getElementById('slide'),
	      h1 = slide.querySelector('h1'),
	      h3 = slide.querySelector('h3'),
	      dots = document.querySelector('.page-dots'),
	      slideContent = slideContents[i];
	  slide.setAttribute('slide-type', slideContent.type);
	  h1.innerHTML = slideContent.h1;
	  h3.innerHTML = slideContent.h3;

	  slide.querySelector('.btn-row a').innerHTML = slideContent.btns[0] || '';
	  slide.querySelector('.btn-row a:last-child').innerHTML = slideContent.btns[1] || '';

	  if (!slideContent.btns || !slideContent.btns[0]) slide.querySelector('.btn-row a').innerHTML = slideContent.btns[0] || '';
	  if (!slideContent.btns || !slideContent.btns[1]) slide.querySelector('.btn-row a:last-child').innerHTML = slideContent.btns[1] || '';

	  dots.querySelector('li.active').className = '';
	  dots.querySelectorAll('li')[i].className = 'active';

	  setTimeout(function () {
	    progress = false;
	  }, 500);
	}
	document.querySelector('.fa.previous').addEventListener('click', function () {
	  setSlideContent(-1);
	});
	document.querySelector('.fa.previous').addEventListener('click', function () {
	  setSlideContent(1);
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".links-light-white a {\n  color: rgba(255, 255, 255, 0.5);\n}\n.links-light-white a:visited {\n  color: rgba(255, 255, 255, 0.7);\n}\n.links-light-white a:hover {\n  color: #ffffff;\n}\n.links-light-blue a {\n  color: rgba(127, 140, 141, 0.5);\n}\n.links-light-blue a:visited {\n  color: rgba(127, 140, 141, 0.7);\n}\n.links-light-blue a:hover {\n  color: #7f8c8d;\n}\nhtml {\n  font-size: 100px;\n}\nbody {\n  font-family: \"proxima-nova\", serif;\n  font-size: .16rem;\n  padding: 0;\n  margin: 0;\n}\nul {\n  list-style: none;\n  padding: 0;\n}\na,\na:visited {\n  letter-spacing: .02rem;\n  background: transparent;\n  display: inline;\n  font-weight: 400;\n  text-decoration: none;\n}\n.sub-links a {\n  font-size: .12rem;\n  letter-spacing: 0;\n}\n*::selection {\n  background-color: #000;\n  color: #fff;\n}\n.name-design {\n  font-family: 'Dancing Script', cursive;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: .162rem;\n  letter-spacing: .02rem;\n  padding: .3rem 0 0;\n  text-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.6);\n}\n.name-middle {\n  border: 1px solid #fff;\n  box-sizing: border-box;\n  width: .5rem;\n  height: .5rem;\n  line-height: .4rem;\n  font-size: .14rem;\n  position: relative;\n  display: inline-block;\n  padding: .05rem .02rem;\n  transform: rotateZ(45deg) translateY(-25%) translateX(-25%);\n}\n.page-dots {\n  display: block;\n  width: 100%;\n  padding: 0;\n  list-style: none;\n  text-align: center;\n}\n.page-dots li {\n  position: relative;\n  display: inline-block;\n  margin: 0;\n  padding: 0 .05rem;\n  cursor: pointer;\n}\n.page-dots li button {\n  border-radius: 50%;\n  font-size: 0;\n  line-height: 0;\n  display: block;\n  width: .1rem;\n  height: .1rem;\n  padding: .05rem;\n  cursor: pointer;\n  color: transparent;\n  background-color: rgba(127, 140, 141, 0.1);\n  border: 0;\n  outline: none;\n}\n.page-dots li button:hover {\n  background-color: #7f8c8d;\n}\n.page-dots li.active button {\n  width: .15rem;\n  height: .15rem;\n  background-color: rgba(127, 140, 141, 0.5);\n}\nfooter {\n  clear: both;\n  font-size: .13rem;\n  text-align: center;\n  font-family: \"proxima-nova\", serif;\n  color: rgba(255, 255, 255, 0.5);\n  background-color: #26262a;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n}\n.footer-inner {\n  padding: .64rem .32rem;\n}\n.all-rights {\n  font-size: .12rem;\n}\n.social-account .fa {\n  margin: .05rem;\n}\nheader {\n  padding-bottom: .3rem;\n  min-height: .75rem;\n}\nheader nav {\n  padding: 0 .75rem;\n  float: right;\n}\nheader nav > a {\n  padding: .1rem;\n  line-height: .75rem;\n  letter-spacing: 0;\n}\nheader nav > a:hover {\n  border-bottom: 3px solid #42b983;\n}\nheader .name-middle {\n  text-align: center;\n  font-family: 'Dancing Script', cursive;\n  color: #7f8c8d;\n  float: left;\n  margin: 0;\n  box-shadow: 0 0 0.3rem rgba(127, 140, 141, 0.5);\n}\n#SAYING {\n  position: relative;\n}\n#SAYING > i.fa {\n  position: absolute;\n  top: 50%;\n  font-size: 1rem;\n  color: rgba(127, 140, 141, 0.1);\n}\n#SAYING > i.fa:hover {\n  color: rgba(127, 140, 141, 0.5);\n}\n#SAYING .previous {\n  left: .2rem;\n}\n#SAYING .next {\n  right: .2rem;\n}\n.slide {\n  margin: 0 auto;\n  min-height: 5rem;\n  max-width: 10rem;\n}\n@media (max-width: 1050px) {\n  .slide .left-part {\n    text-align: center;\n    width: 100%;\n    float: none;\n  }\n  .slide .right-part {\n    text-align: center;\n    margin: 0 auto;\n    float: none;\n  }\n}\n.left-part {\n  width: 3.7rem;\n  float: left;\n}\n.left-part h1 {\n  color: rgba(66, 185, 131, 0.7);\n  margin: .5rem 0 0 0;\n  font-size: .36rem;\n  font-family: \"AvenirNextLTPro-UltLt\", \"HelveticaNeue-Light\", Helvetica, Arial, sans-serif;\n  font-weight: bold;\n  letter-spacing: -0.02rem;\n  -webkit-font-smoothing: antialiased;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  cursor: default;\n}\n.left-part h3 {\n  color: rgba(127, 140, 141, 0.5);\n  font-size: .20rem;\n  font-weight: 400;\n  font-family: \"Avenir Next\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  margin: 4px 0px 32px;\n  line-height: 1.4;\n  letter-spacing: -0.01rem;\n}\n.left-part .btn {\n  display: inline-block;\n  color: rgba(66, 185, 131, 0.7);\n  border: 2px solid rgba(66, 185, 131, 0.7);\n  margin-top: .2rem;\n  padding: .15rem .32rem;\n  font-size: .22rem;\n  font-family: \"AvenirNextLTPro-Regular\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  opacity: 1;\n}\n.right-part {\n  float: right;\n  min-height: 100%;\n  width: 40%;\n  height: 3rem;\n  margin-top: .5rem;\n  background-position: center;\n  background-size: 320px 299px;\n  background-repeat: no-repeat;\n  background-image: url(" + __webpack_require__(9) + ");\n}\n[slide-type=\"function\"] .right-part {\n  background-size: cover;\n  background-image: url(" + __webpack_require__(10) + ");\n}\n[slide-type=\"sap\"] .right-part {\n  background-size: contain;\n  background-image: url(" + __webpack_require__(11) + ");\n}\n#SKILL {\n  background-color: #f9f9f9;\n}\n#SKILL .slide {\n  min-height: 4rem;\n}\n#SKILL .left-part {\n  float: right;\n}\n#SKILL .left-part h1 {\n  font-size: .3rem;\n  letter-spacing: .02rem;\n  font-weight: normal;\n  color: #34495e;\n  font-family: monospace, 'Helvetica Neue', Arial, sans-serif;\n}\n#SKILL .left-part h3 {\n  text-indent: .15rem;\n  font-style: italic;\n  color: #34495e;\n  font-weight: 100;\n}\n#SKILL .right-part {\n  width: 45%;\n  float: left;\n  background: transparent;\n  font-size: .2rem;\n  color: #7f8c8d;\n}\n#SKILL .right-part li {\n  padding: .05rem 0;\n}\n#SKILL .right-part .fa {\n  color: rgba(11, 96, 239, 0.4);\n  margin-right: .05rem;\n}\n@media (max-width: 1050px) {\n  #SKILL .slide .left-part {\n    text-align: center;\n    width: 100%;\n    float: none;\n  }\n  #SKILL .slide .right-part {\n    text-align: center;\n    margin: 0 auto;\n    float: none;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "phone.png?e11b27c99a6ca91b07feb0357148b847";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "windows.png?002d7b95d762e63fd7e6da96bd996716";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ipad.png?a256096da3b4803c71b8c056635fd856";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);