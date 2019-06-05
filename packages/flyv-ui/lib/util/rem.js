/**
 * rem的本质是等比缩放，这里将设计图的文档宽度预设为750，根节点的font-size 100px，以达到换算效果
 * rem计算方式：设计图尺寸px / 100 = 实际rem  【例: 100px = 1rem，32px = .32rem】
 */
export var rem = function rem() {
  var docWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 750;
  return function () {
    var doc = window.document;
    var docEl = doc.documentElement;
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

    var recalc = function refreshRem() {
      var clientWidth = docEl.getBoundingClientRect().width;
      /* 8.55：小于320px不再缩小，11.2：大于420px不再放大 */

      docEl.style.fontSize = Math.max(Math.min(20 * (clientWidth / docWidth), 11.2), 8.55) * 5 + 'px';
      return refreshRem;
    }();
    /* 添加倍屏标识，安卓为1 */


    docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ? "".concat(window.devicePixelRatio) : '1');

    if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
      /* 添加IOS标识 */
      doc.documentElement.classList.add('ios');
      /* IOS8以上给html添加hairline样式，以便特殊处理 */

      if (parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8) doc.documentElement.classList.add('hairline');
    }

    if (!doc.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  };
};