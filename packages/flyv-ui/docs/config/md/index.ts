interface route {
    path: string,
    name: string,
    component: () => {}
}

const routes: route[] = [
    {
        path: '/progress',
        name: 'Progress',
        component: () => import('../../../packages/progress/index.md')
    },
    {
        path: '/icon',
        name: 'Icon',
        component: () => import('../../../packages/icon/index.md')
    }
];

export default routes;
