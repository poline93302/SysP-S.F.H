/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/isShow.js":
/*!********************************!*\
  !*** ./resources/js/isShow.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Father  */
var Faterdata = {
  data: {
    ShowVisParts: [
    /* "inside  outside  farm "  ture 1 false 0 */
    {
      id: 1,
      url: 'PointTag_1',
      title: '智能灑水系統',
      En_title: 'SmartWateing',
      type: 3,
      visbile: false
    }, {
      id: 2,
      url: 'PointTag_2',
      title: '智能燈泡系統',
      En_title: 'SmartLighting',
      type: 3,
      visbile: false
    }, {
      id: 3,
      url: 'PointTag_3',
      title: '空品監測系統',
      En_title: 'AirQuality',
      type: 3,
      visbile: false
    }, {
      id: 4,
      url: 'PointTag_4',
      title: '微氣候系統',
      En_title: 'Microclimate',
      type: 2,
      visbile: false
    }]
  },
  methods: {
    VisChage: function VisChage(BtnVaule) {
      var _this = this;

      //點的顯示部分 確認visble為何做出顯示
      this.ShowVisParts.forEach(function (ShowVisPart, k) {
        BtnVaule == ShowVisPart.type ? _this.ShowVisParts[k].visbile = true : _this.ShowVisParts[k].visbile = false;
      });
    }
  }
};
var ShowOn = new Vue({
  el: "#ShowOn",
  mixins: [Faterdata]
});
new Vue({
  el: '#ButtonChiled',
  data: {
    BtnInfos: [{
      id: 3,
      BtnName: '室內微氣候'
    }, {
      id: 1,
      BtnName: '農場監控'
    }, {
      id: 2,
      BtnName: '室外微氣候'
    }]
  },
  mixins: [Faterdata]
});
var TestVueWorkingOn = "Vue working!";
var ShowCount = 0;
new Vue({
  el: '#TagPointPage',
  data: {
    windowY: 0
  },
  computed: {
    PointInfos: function PointInfos() {
      return [{
        id: 0,
        url: 'PointTag_0',
        color: true,
        visbile: true
      }, {
        id: 1,
        url: this.ShowVisParts[0].url,
        color: false,
        visbile: this.ShowVisParts[0].visbile
      }, {
        id: 2,
        url: this.ShowVisParts[1].url,
        color: false,
        visbile: this.ShowVisParts[1].visbile
      }, {
        id: 3,
        url: this.ShowVisParts[2].url,
        color: false,
        visbile: this.ShowVisParts[2].visbile
      }, {
        id: 4,
        url: this.ShowVisParts[3].url,
        color: false,
        visbile: this.ShowVisParts[3].visbile
      }];
    }
  },
  mounted: function mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
  },
  methods: {
    PointEvent: function PointEvent(id) {
      this.PointInfos.forEach(function (PointInfo) {
        PointInfo.color = false;
      });
      this.$set(this.PointInfos[id], 'color', true);
    },
    handleScroll: function handleScroll() {// let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // let scroll_O  = document.body.clientHeight/6 /* scrollTop  / wind  * 100% =   window.innerHeight*0.5*/
      //
      // if(scrollTop>4.5*scroll_O)
      //     this.PointEvent(4);
      // else if(scrollTop>3.5*scroll_O)
      //     this.PointEvent(3);
      // else if(scrollTop>2.5*scroll_O)
      //     this.PointEvent(2);
      // else if(scrollTop>1.5*scroll_O)
      //     this.PointEvent(1);
      // else if(scrollTop>0*scroll_O)
      //     this.PointEvent(0);
    }
  },
  mixins: [Faterdata]
});

/***/ }),

/***/ 0:
/*!**************************************!*\
  !*** multi ./resources/js/isShow.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yinglu_chen/SysP-S.F.H/resources/js/isShow.js */"./resources/js/isShow.js");


/***/ })

/******/ });