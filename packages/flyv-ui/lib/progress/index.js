import { prefixBem } from '../util/bem';
import { transformComponent } from '../util/transformComponent';
import { prefixStyle } from '../util/dom';
var bem = prefixBem('progress');
var PROGRESS_BTN_WIDTH = 16;
var transformPrefix = prefixStyle('transform');
export default transformComponent('progress')({
  props: {
    percent: {
      type: Number,
      "default": 0
    }
  },
  methods: {
    progressTouchStart: function progressTouchStart(e) {
      this.touch.initiated = true;
      this.touch.startX = e.touches[0].pageX;
      this.touch.left = this.$refs.progress.clientWidth;
    },
    progressTouchMove: function progressTouchMove(e) {
      if (!this.touch.initiated) {
        return;
      }

      var deltaX = e.touches[0].pageX - this.touch.startX;
      var offsetWidth = Math.min(this.$refs.progressBar.clientWidth - PROGRESS_BTN_WIDTH, Math.max(0, this.touch.left + deltaX));

      this._offset(offsetWidth);
    },
    progressTouchEnd: function progressTouchEnd() {
      this.touch.initiated = false;

      this._triggerPercent();
    },
    progressClick: function progressClick(e) {
      if (e.offsetX > 16) {
        this._offset(e.offsetX);

        this._triggerPercent();
      }
    },
    _triggerPercent: function _triggerPercent() {
      var barWidth = this.$refs.progressBar.clientWidth - PROGRESS_BTN_WIDTH;
      var percent = Math.min(this.$refs.progress.clientWidth / barWidth, 1);
      this.$emit('percentChange', percent);
    },
    _offset: function _offset(offsetWidth) {
      this.$refs.progress.style.width = "".concat(offsetWidth, "px");
      this.$refs.progressBtn.style[transformPrefix] = "translate3d(".concat(offsetWidth, "px, 0, 0)");
    }
  },
  created: function created() {
    this.touch = {};
  },
  render: function render(h) {
    return h("div", {
      "class": bem(),
      "ref": "progressBar",
      "on": {
        "click": this.progressClick
      }
    }, [h("div", {
      "class": bem('inner')
    }, [h("div", {
      "class": bem('bar'),
      "ref": "progress"
    }), h("div", {
      "on": {
        "touchstart": this.progressTouchStart,
        "touchmove": this.progressTouchMove,
        "touchend": this.progressTouchEnd
      },
      "ref": "progressBtn",
      "class": bem('btn-wrapper')
    }, [h("div", {
      "class": bem('btn-ct')
    }, [h("div", {
      "class": bem('btn')
    })])])])]);
  }
});