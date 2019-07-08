import { route } from '../../../types/route';

const componentPaths = [
    {
        path: '/progress',
        name: 'Progress'        
    },
    {
        path: '/icon',
        name: 'Icon',        
    }
];

const getPath = (type:string = 'pc', path: string): () => {} => {
    if (path.slice(1) === 'progress') {
        const fn = type === 'pc' ? () => import('../../../packages/progress/index.md')
        : () => import('../../../packages/progress/demo/index.vue');
        return fn;
    }
    if (path.slice(1) === 'icon') {
        const fn = type === 'pc' ? () => import('../../../packages/icon/index.md')
        : () => import('../../../packages/icon/demo/index.vue');
        return fn;
    }
};


const pcRoutes: route[] = componentPaths.map(componentPath => {
    return {
        path: componentPath.path,
        name: componentPath.name,
        component: getPath('pc', componentPath.path)
    }
});

const mobileRoutes: route[] = componentPaths.map(componentPath => {
    return {
        path: componentPath.path,
        name: componentPath.name,
        component: getPath('mobile', componentPath.path)
    }
});

export {
    pcRoutes,
    mobileRoutes
};
