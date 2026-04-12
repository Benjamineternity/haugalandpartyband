<template>
    <ImageBackground bg="empty2" />
    <NavBar />
    <Panel class="h-100">
        <template #header1>
            T-skjorter
        </template>
        <template #content1>
            
        </template>
    </Panel>
    <Footer />
</template>

<script setup>
    import { onMounted, ref } from 'vue';

    import NavBar from '/src/components/NavBar.vue';
    import ImageBackground from '/src/components/ImageBackground.vue';
    import Panel from '/src/components/Panel.vue';
    import Footer from '/src/components/Footer.vue';


</script>

<style scoped>
    .bg-default {
        background-color: rgba(22, 24, 31, var(--bs-bg-opacity));
    }

    .c-default {
        color: rgb(242, 239, 234);
    }

    

</style>