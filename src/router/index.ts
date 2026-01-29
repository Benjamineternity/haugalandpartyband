import { createRouter, createWebHistory } from 'vue-router';

import Home from '/src/App.vue';
import Galleri from '/src/Galleri.vue';
import Anmeldelser from '/src/Anmeldelser.vue';
import Kontakt from '/src/Kontakt.vue';
import Kalender from '/src/Kalender.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: Home },
        { path: '/home', component: Home },
        { path : '/galleri', component: Galleri },
        { path: '/anmeldelser', component: Anmeldelser },
        { path: '/kontakt', component: Kontakt },
        { path: '/kalender', component: Kalender}
    ]
});

export default router


