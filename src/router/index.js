import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home';
import About from '../views/About';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about/:slug',
            name: 'About',
            component: About
        },
    ]
})