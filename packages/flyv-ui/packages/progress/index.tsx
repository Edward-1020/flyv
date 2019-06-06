import { CreateElement } from 'vue/types';
import { prefixBem } from '../util/bem';
import { transformComponent } from '../util/transformComponent';
import {prefixStyle} from '../util/dom';

const bem = prefixBem('progress');
const PROGRESS_BTN_WIDTH = 8;
const transformPrefix = prefixStyle('transform');

export default transformComponent('progress')({
    props: {
        progressBtnWidth: {
            type: Number,
            default: PROGRESS_BTN_WIDTH
        },
        percent: {
            type: Number,
            default: 0
        }
    },
    methods: {
        progressTouchStart (e: TouchEvent) {
            this.touch.initiated = true;
            this.touch.startX = e.touches[0].pageX;
            this.touch.left = this.$refs.progress.clientWidth;
        },
        progressTouchMove (e:TouchEvent) {
            if (!this.touch.initiated) {
                return;
            }
            const deltaX = e.touches[0].pageX - this.touch.startX;
            const offsetWidth = Math.min(this.$refs.progressBar.clientWidth - this.progressBtnWidth, Math.max(0, this.touch.left + deltaX));
            this._offset(offsetWidth);            
        },
        progressTouchEnd () {
            this.touch.initiated = false;
            this._triggerPercent();
        },
        progressClick (e: MouseEvent) {
            if (e.offsetX > 16) {
                this._offset(e.offsetX);
                this._triggerPercent();
            }
        },
        _triggerPercent () {
            const barWidth = this.$refs.progressBar.clientWidth - this.progressBtnWidth;
            const percent = Math.min(this.$refs.progress.clientWidth / barWidth, 1);
            this.$emit('percentChange', percent);
        },
        _offset (offsetWidth: number) {
            this.$refs.progress.style.width = `${offsetWidth}px`;
            this.$refs.progressBtn.style[transformPrefix] = `translate3d(${offsetWidth}px, 0, 0)`;
        }
    },
    created () {
        this.touch = {};
    },
    render (h:CreateElement) {
        return (
            <div class={bem()} ref="progressBar" onClick={this.progressClick}>
                <div class={bem('inner')}>
                    <div class={bem('bar')} ref="progress"></div>
                    <div
                        onTouchstart={this.progressTouchStart}
                        onTouchmove={this.progressTouchMove}
                        onTouchend={this.progressTouchEnd}
                        ref="progressBtn"
                        class={bem('btn-wrapper')}>
                            <div class={bem('btn')}></div>
                    </div>
                </div>
            </div>
        )
    }
});