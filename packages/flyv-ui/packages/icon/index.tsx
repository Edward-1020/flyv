import {
    CreateElement,
    RenderContext
} from 'vue/types';
import { prefixBem } from '../util/bem';
import { transformComponent } from '../util/transformComponent';

const bem = prefixBem('icon');

function ICon(
    h: CreateElement,
    context: RenderContext
) {
    if (context.props.name) {
        return (
            <svg class={bem()} aria-hidden="true">
                <use xlinkHref={`#icon-${context.props.name}`}></use>
            </svg>
        );
    } else {
        return (
            <span></span>
        )
    }
}

ICon.props = {
    name: {
        type: String,
        default: ''
    }
};

export default transformComponent('icon')(ICon)

