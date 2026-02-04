<template>
    <NavBar />
    <Hjem v-if="compUrl === 'hjem' || compUrl === '' || !compUrl" />

    <Galleri v-if="compUrl === 'galleri'" />
    <Kalender v-if="compUrl == 'kalender'" />
    <Anmeldelser v-if="compUrl === 'anmeldelser'" />
    <Kontakt v-if="compUrl === 'kontakt'" />
</template>

<script setup lang="ts">
    import { computed } from 'vue';

    import Hjem from './Hjem.vue';
    import Anmeldelser from './Anmeldelser.vue';
    import Kontakt from './Kontakt.vue';
    import Kalender from './Kalender.vue';
    import Galleri from './Galleri.vue';

    import NavBar from './components/NavBar.vue';

    const compUrl = computed<string | undefined>(() => {
        return window.location.href.split('.no')[1] ? window.location.href.split('.no')[1] : '';
    });

</script>

<style scoped>
    .bg-default {
        background-color: rgb(28, 26, 22) ;
    }

    .c-default {
        color: #F2EFEA;
    }

</style>