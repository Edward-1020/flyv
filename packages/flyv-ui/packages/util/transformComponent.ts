import Vue, {
    VNode,
    VueConstructor,
    ComponentOptions,
    CreateElement,
    RenderContext
  } from 'vue';
import { PropsDefinition } from 'vue/types/options';

export function install(this: ComponentOptions<Vue>, Vue: VueConstructor) {
  const { name } = this;
  Vue.component(name as string, this);
}

export type DefaultProps = Record<string, any>;

export type FunctionComponent<Props = DefaultProps> = {
  (
    h: CreateElement,
    context: RenderContext
  ): VNode | undefined;
  props: PropsDefinition<Props>;
};

export function transformComponentName(name: string): string {
    name = 'flyv-' + name;
    return name;
}

export function transformFunctionComponent<Props = DefaultProps>(pure: FunctionComponent<Props>) {
    return {
        functional: true,
        props: pure.props,
        render: (h: CreateElement, context: RenderContext): any =>
          pure(h, context)
    };
}

export const transformComponent = (name: string) => (componentOpts: FunctionComponent | any) => {
  if (typeof componentOpts === 'function') {
    componentOpts = transformFunctionComponent(componentOpts);
  }
  componentOpts.name = transformComponentName(name);
  componentOpts.install = install;
  return componentOpts;
}
