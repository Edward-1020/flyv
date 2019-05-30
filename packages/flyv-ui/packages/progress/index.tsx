import { CreateElement, RenderContext } from 'vue/types';
import { transformComponent } from '../util/transformComponent';
import {prefixStyle} from '../util/dom';

const PROGRESS_BTN_WIDTH = 16;
const transformPrefix = prefixStyle('transform');

function Progress (
    h: CreateElement,
    ctx: RenderContext
) {
    let ref = {};
    const handleClick = () => {
        console.log(ref);
    }

    return (
        <div ref={(vnode: any) => ref = vnode} onClick={handleClick}>11111</div>
    );
}
Progress.props = {
    percent: String
};
export default transformComponent('progress')(Progress);