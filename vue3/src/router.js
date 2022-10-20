import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue';
import DcHeros from './pages/DcHeros.vue';
import Calender from './pages/Calender.vue';
import Markdown from './pages/Markdown.vue';
import Carousel from './pages/Carousel.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/dc-heros', component: DcHeros },
    { path: '/calender', component: Calender },
    { path: '/markdown', component: Markdown },
    { path: '/carousel', component: Carousel },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;