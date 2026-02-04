<template>
    <NavBar />
    <Hjem v-if="compUrl === 'hjem' || compUrl === '/' || !compUrl" />

    <Galleri v-if="compUrl === 'galleri'" />
    <Kalender v-if="compUrl == 'kalender'" />
    <Anmeldelser v-if="compUrl === 'anmeldelser'" />
    <Kontakt v-if="compUrl === 'kontakt'" />
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue';

    import Hjem from './Hjem.vue';
    import Anmeldelser from './Anmeldelser.vue';
    import Kontakt from './Kontakt.vue';
    import Kalender from './Kalender.vue';
    import Galleri from './Galleri.vue';

    import NavBar from './components/NavBar.vue';

    const compUrl = computed<string | undefined>(() => {
        return window.location.href.split('/haugalandpartyband/')[1] ? window.location.href.split('/haugalandpartyband/')[1] : '/';
    });

</script>

<style scoped>
    .bg-default {
        background-color: #1c1a16;
    }

    .c-default {
        color: #F2EFEA;
    }

    .nav-default {
        height: 7%;
        --bs-bg-opacity: 0.5;
        background-color: rgba(22, 24, 31, var(--bs-bg-opacity));
    }

    .clickable {
        cursor: pointer;
    }

</style>