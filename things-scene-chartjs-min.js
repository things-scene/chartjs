!function t(e,r,n){function a(i,u){if(!r[i]){if(!e[i]){var c="function"==typeof require&&require;if(!u&&c)return c(i,!0);if(o)return o(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var f=r[i]={exports:{}};e[i][0].call(f.exports,function(t){var r=e[i][1][t];return a(r?r:t)},f,f.exports,t,e,r,n)}return r[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)a(n[i]);return a}({1:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(r,"__esModule",{value:!0});var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),c=function s(t,e,r){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var a=Object.getPrototypeOf(t);return null===a?void 0:s(a,e,r)}if("value"in n)return n.value;var o=n.get;return void 0===o?void 0:o.call(r)},l=t("./chart-helpers-overload"),f=(n(l),function(t){function e(t){return a(this,e),o(this,Object.getPrototypeOf(e).call(this,t))}return i(e,t),u(e,[{key:"resize",value:function(){}},{key:"destroy",value:function(){}},{key:"clear",value:function(){}},{key:"bindEvents",value:function(){}},{key:"draw",value:function(t){return arguments.length>1?(this.__ease__=t,void this._component.invalidate()):void c(Object.getPrototypeOf(e.prototype),"draw",this).call(this,t)}},{key:"reset",value:function(t,e,r){var n=this.chart.width!==t||this.chart.height!==e;this.chart.width=t,this.chart.height=e,this.chart.ctx=r;var a=!0,o=!1,i=void 0;try{for(var u,c=this.boxes[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;l.ctx=r}}catch(f){o=!0,i=f}finally{try{!a&&c["return"]&&c["return"]()}finally{if(o)throw i}}n&&this.updateLayout()}}]),e}(Chart.Controller));r["default"]=f},{"./chart-helpers-overload":2}],2:[function(t,e,r){"use strict";function n(){}Object.defineProperty(r,"__esModule",{value:!0});var a=(Chart.helpers,Chart.Controller,Object.assign({},Chart.helpers));a.retinaScale=n,a.addResizeListener=n,a.removeResizeListener=n;var o=Chart.helpers.getRelativePosition;Chart.helpers.getRelativePosition=function(t,e){var r=t.chartJSWrapper;if(!r)return o(t,e);var n=t.chartJSWrapper.transcoordC2S(t.offsetX,t.offsetY);return{x:n.x-r.get("left"),y:n.y-r.get("top")}},r["default"]=a},{}],3:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(r,"__esModule",{value:!0});var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),c=t("./chart-helpers-overload"),l=n(c),f=t("./chart-controller-overload"),s=n(f),h=Chart.helpers,p=Chart.Controller,d=function(t){function e(t,r,n){a(this,e),e.backup();var i=o(this,Object.getPrototypeOf(e).call(this,t,r));return e.restore(),i._component=n,i}return i(e,t),u(e,null,[{key:"backup",value:function(){Chart.helpers=l["default"],Chart.Controller=s["default"]}},{key:"restore",value:function(){Chart.helpers=h,Chart.Controller=p}}]),e}(Chart);r["default"]=d},{"./chart-controller-overload":1,"./chart-helpers-overload":2}],4:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(r,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},c=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),l=t("./chart-overload"),f=n(l),s=scene,h=s.Component,p=s.Rect,d=function(t){function e(){return a(this,e),o(this,Object.getPrototypeOf(e).apply(this,arguments))}return i(e,t),c(e,[{key:"_draw",value:function(t){if(!this._chart){var e=this.model.chart;if(!e)return;this._chart=new f["default"](t,JSON.parse(JSON.stringify(e)),this)}var r=this.model,n=r.width,a=r.height,o=r.left,i=r.top;t.translate(o,i),this._draw_once?(this._chart.chart.ctx!=t&&this._chart.reset(n,a,t),this._chart.draw(this._chart.__ease__)):(this._chart.reset(n,a,t),this._chart.update(0),this._draw_once=!0),t.translate(-o,-i)}},{key:"onchange",value:function(t){if(t.hasOwnProperty("chart")){this._chart=null,this._draw_once=!1;var e=this.model.chart.data.datasets,r=this.model.chart.data.rawData.seriesData,n=[];if(e.length>r.length){for(var a=0;a<this.model.chart.data.rawData.labelData.length;a++)n.push(Math.floor(Math.random()*r[0][a]/2));r.push(n)}return void this.invalidate()}(t.width||t.height)&&(this._draw_once=!1,this.invalidate()),t.hasOwnProperty("data")&&(this._chart.config.data.rawData=t.data||{},this._chart.update());for(var o in t)if(t.hasOwnProperty(o)){var i=this.model,c=this,l=o.split("."),f=t[o];if("object"===("undefined"==typeof f?"undefined":u(f))&&(f=JSON.parse(JSON.stringify(f))),l.length>0){for(var s=!1,a=0;a<l.length;a++){var h=l[a];"chart"===h&&(s=!0),h=h.replace("#",""),a===l.length-1&&(i[h]=f,c[h]=f),i=i[h],c=c[h]||c["_"+h]}s&&this._chart.update(0)}}}},{key:"onclick",value:function(t){t.chartJSWrapper=this,this._chart&&this._chart.eventHandler(t)}},{key:"ondragstart",value:function(){}},{key:"onmousemove",value:function(t){t.chartJSWrapper=this,this._chart&&this._chart.eventHandler(t)}},{key:"controls",get:function(){}}]),e}(p);r["default"]=d,h.register("chartjs",d)},{"./chart-overload":3}],5:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function a(t){if(t.data.rawData){{var e=t.data.rawData.seriesData;t.id}e&&0!==e.length||(e=[null]);for(var r in e)t.data.datasets[r]&&(t.data.datasets[r].data=e[r]||[])}}function o(t){var e=t.data.rawData.labelData;t.config.data.labels=e||[]}Object.defineProperty(r,"__esModule",{value:!0});var i=t("./chart-overload");Object.defineProperty(r,"SceneChart",{enumerable:!0,get:function(){return n(i)["default"]}});var u=t("./chartjs-wrapper");Object.defineProperty(r,"ChartJSWrapper",{enumerable:!0,get:function(){return n(u)["default"]}}),Chart.plugins.register({beforeInit:function(){},beforeUpdate:function(t){if(t.data.rawData){{t.data.rawData.seriesData}o(t),a(t)}},beforeRender:function(){}})},{"./chart-overload":3,"./chartjs-wrapper":4}]},{},[5]);