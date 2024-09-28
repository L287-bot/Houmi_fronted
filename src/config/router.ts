import Index from "../pages/Index.vue";
import Team from "../pages/TeamPage.vue";
import User from "../pages/UserPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import UserEditPage from "../pages/UserEditPage.vue"
import SearchResultPage from "../pages/SearchResultPage.vue"
import UserLoginPage from "../pages/UserLoginPage.vue"
const routes=[
    {path:'/',component:Index},
    {path:'/login',component:UserLoginPage},
    {path: '/team',component: Team},
    {path: '/user',component: User},
    {path: '/search',component: SearchPage},
    {path: '/user/edit',component: UserEditPage},
    {path: '/user/list',component: SearchResultPage},


]

export  default routes;