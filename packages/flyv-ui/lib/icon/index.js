import { prefixBem } from '../util/bem';
import { transformComponent } from '../util/transformComponent';
var bem = prefixBem('icon');

function ICon(h, context) {
  if (context.props.name) {
    return h("svg", {
      "class": bem(),
      "attrs": {
        "aria-hidden": "true"
      }
    }, [h("use", {
      "attrs": {
        "xlink:href": "#icon-".concat(context.props.name)
      }
    })]);
  } else {
    return h("span");
  }
}

ICon.props = {
  name: {
    type: String,
    "default": ''
  }
};
export default transformComponent('icon')(ICon);