<template>
    <NavBar />
    <ImageBackground />
    <Panel>
        <template #header1>
            <div class="bg-default">
                Norges Beste Coverband
            </div>
        </template>
        <template #content1>
            <div class="bg-default">
                <p>Bandet består av fem unge menn som har spilt opp til dans i flere år, tross sin unge alder.</p>
                <p>Med haugevis av slagere fra 70-, 80- og 90-tallet, blir det garantert allsang og god stemning!</p>
            </div>
        </template>
    </Panel>
    <Footer />
</template>

<script setup>
    import NavBar from '/src/components/NavBar.vue';
    import ImageBackground from '/src/components/ImageBackground.vue';
    import Panel from '/src/components/Panel.vue';
    import Footer from '/src/components/Footer.vue';

    // const compUrl = computed<string | undefined>(() => {
    //     console.log(window.location.href.split('.no')[1] ? window.location.href.split('/haugalandpartyband')[1] : 'ingenting')
    //     return window.location.href.split('.no')[1] ? window.location.href.split('.no')[1] : '';
    // });

</script>

<style scoped>
    .bg-default {
        /* background-color: rgb(28, 26, 22); */
        --bs-bg-opacity: 0.5;
        background-color: rgba(22, 24, 31, var(--bs-bg-opacity));
    }

    .c-default {
        color: rgb(242, 239, 234);
    }

    

</style>