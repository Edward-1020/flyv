import {
    VNode,
    CreateElement,
    RenderContext
  } from 'vue';
import { PropsDefinition } from 'vue/types/options';

export type DefaultProps = Record<string, any>;

export type FunctionComponent<Props = DefaultProps> = {
  (
    h: CreateElement,
    context: RenderContext
  ): VNode | undefined;
  props: PropsDefinition<Props>;
};

export function transformComponentName(name: string): string {
    name = 'van-' + name;
    return name;
}

export function transFormFunctionComponent<Props = DefaultProps>(pure: FunctionComponent<Props>) {
    return {
        functional: true,
        props: pure.props,
        render: (h: CreateElement, context: RenderContext): any =>
          pure(h, context)
    };
}

function Button (
    h: CreateElement,
    ctx: RenderContext
) {
    return undefined;
}

Button.props = {};

transFormFunctionComponent(Button);