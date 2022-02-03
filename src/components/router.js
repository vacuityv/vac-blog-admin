import { createRouter, createWebHashHistory } from 'vue-router'


const NotFoundComponent = { template: '<p>Page not found</p>' }
const HomeComponent = { template: '<p>Home page</p>' }
const AboutComponent = { template: '<p>About page</p>' }

const routes = [
    {path: '/', component: HomeComponent},
    {path: '/home', component: HomeComponent},
    {path: '/detail', component: NotFoundComponent},
    {path: '/about', component: AboutComponent}
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router