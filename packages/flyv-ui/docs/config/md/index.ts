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
    }
];

export default routes;
