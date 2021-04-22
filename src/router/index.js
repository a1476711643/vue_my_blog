import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Home from '../views/Home'
import Welcome from "../views/Content/Welcome";
import Blog from "../views/Content/Blog";
import Comment from "../views/Content/Comment";
import ShareMusic from "../views/Content/ShareMusic";

Vue.use(VueRouter)

const routes = [
    {path: "/", component: Index},
    {
        path: "/home", component: Home,redirect:'/Welcome',children:[
            { path: '/welcome', component: Welcome },
            { path:'/blog',component: Blog},
            { path:'/comment',component: Comment},
            { path:'/sharemusic',component: ShareMusic}
        ]
    },
]

const router = new VueRouter({
    linkActiveClass:"",
    linkExactActiveClass:"",
    routes
})

export default router
