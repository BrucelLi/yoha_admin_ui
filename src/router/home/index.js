// 主体
const Home = r => require.ensure([], () => r(require('../../views/home/Home.vue')), 'Home')
const Index = r => require.ensure([], () => r(require('../../views/home/Index.vue')), 'Index')

import config from '@/config';

export default  {
    path:'',
    name:'home',
    meta:{
        'title':'首页'
    },
    redirect: config.routePrefix + '/index',
    component:Home,
    children:[
        {
            path: 'index',
            name: 'index',
            meta: {
                title: 'yoha管理后台'
            },
            component:Index
        }
    ]
}