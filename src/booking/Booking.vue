<template>
    <NavBar />
    <!-- <ImageBackground /> -->
    <!-- <div class="bg-default">
        <Panel :text="'Booking'"> -->
            <p class="text-center">Book oss i dag!</p>
            <h1>BETA</h1>
            <h4>For questios or features send a mail to Benjamin.hole@outlook.com please</h4>
        <!-- </Panel>
    </div> -->
    <Footer />
</template>

<script setup lang="ts">
    import NavBar from '/src/components/NavBar.vue';
    import ImageBackground from '/src/components/ImageBackground.vue';
    import Panel from '/src/components/Panel.vue';
    import Footer from '/src/components/Footer.vue';

</script>

<style scoped>
    .bg-default {
        background-color: rgba(22, 24, 31);
    }

    .c-default {
        color: rgb(242, 239, 234);
    }

</style>