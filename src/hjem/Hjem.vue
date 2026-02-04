<template>
    <NavBar />
    <ImageBackground />
    <Footer />
</template>

<script setup lang="ts">
    import { computed } from 'vue';

    import NavBar from '/src/components/NavBar.vue';
    import ImageBackground from '/src/components/ImageBackground.vue';
    import Panel from '/src/components/Panel.vue';
    import Footer from '/src/components/Footer.vue';

    // import Hjem from './Hjem.vue';
    // import Anmeldelser from './anmeldelser/Anmeldelser.vue';
    // import Kontakt from './Kontakt.vue';
    // import Kalender from './kalender/Kalender.vue';
    // import Galleri from './galleri/Galleri.vue';

    const compUrl = computed<string | undefined>(() => {
        console.log(window.location.href.split('.no')[1] ? window.location.href.split('/haugalandpartyband')[1] : 'ingenting')
        return window.location.href.split('.no')[1] ? window.location.href.split('.no')[1] : '';
    });

</script>

<style scoped>
    .bg-default {
        background-color: rgb(28, 26, 22) ;
    }

    .c-default {
        color: rgb(242, 239, 234);
    }

</style>