import {
    createRouter,
    createWebHistory
} from "vue-router";
import { useStore } from 'vuex';
import { computed } from "vue";

import MainPage from "@/views/main-page.vue";
import AccountPage from "@/views/account-page.vue";
import NotFoundPage from "@/views/not-found-page.vue";
import AuthPage from "@/views/auth-page.vue";
import BooksPage from "@/views/books-page.vue";
import BookPage from "@/views/book-page.vue";

const store = useStore()
const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/auth',
        component: AuthPage
    },
    {
        path: '/account',
        component: AccountPage,
        meta: { requiresAccount: true }
    },
    {
        path: '/booksPage',
        component: BooksPage
    },
    {
        path: '/bookPage',
        component: BookPage
    },
    {
        path: '/:catchAll(.*)',
        component: NotFoundPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
});

// Навигационный охранник
router.beforeEach((to, from, next) => {
    const authToken = computed(() => store.getters['userModule/getAuthToken']);

    if (to.matched.some(record => record.meta.requiresAccount)) {
        if (!authToken.value) {
            next('/');
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
