<template>
    <NavBar />
    <ImageBackground />
    <Panel>
        <template #header1>
            <p >Galleri</p>
        </template>
        <template #content1>
            <p>Coming soon</p>
        </template>
    </Panel>
    <Footer />
</template>

<script setup>

    import NavBar from '/src/components/NavBar.vue';
    import ImageBackground from '/src/components/ImageBackground.vue';
    import Panel from '/src/components/Panel.vue';
    import Footer from '/src/components/Footer.vue';

</script>