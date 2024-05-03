import {
    createRouter,
    createWebHistory
} from "vue-router";
import {useStore} from 'vuex';

import AuthPage from "@/views/auth-page.vue";
import AccountPage from "@/views/account-page.vue";
import VotePage from "@/views/vote-page.vue";
import StatisticsPage from "@/views/statistics-page.vue";
import CreateVotePage from "@/views/create-vote-page.vue";
import UserProfilePage from "@/views/user-profile-page.vue";
import ListUsersPage from "@/views/list-users-page.vue";
import NotFoundPage from "@/views/not-found-page.vue";
import {computed} from "vue";

const store = useStore()
const routes = [
    {
        path: '/',
        component: AuthPage
    },
    {
        path: '/account',
        component: AccountPage,
        meta: {requiresAccount: true}
    },
    {
        path: '/account/vote',
        component: VotePage,
        meta: {requiresAccount: true}
    },
    {
        path: '/account/statistics/:id',
        component: StatisticsPage,
        meta: {requiresAccount: true}
    },
    {
        path: "/account/createVote",
        component: CreateVotePage,
        meta: {requiresAccount: true}
    },
    {
        path: "/account/userProfilePage",
        component: UserProfilePage,
        meta: {requiresAccount: true}
    },
    {
        path: "/account/listUsersPage",
        component: ListUsersPage,
        meta: {requiresAccount: true}
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
    const store = useStore();
    const authToken = computed(() => store.getters['userModule/getAuthToken']);
    // const authToken = "";

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
