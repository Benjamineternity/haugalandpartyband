<template>
    <!-- <NavBar /> -->
    <!-- <ImageBackground /> -->
    <!-- <div class="bg-default">
        <Panel :text="'Booking'"> -->
            <p class="text-center">Book oss i dag!</p>
            <h3 class="text-center">BETA</h3>
            <h6 class="text-center">For questions or features send a mail to Benjamin.hole@outlook.com please</h6><br>
            <div class="container">
                {{ httpReq }}
            </div>
        <!-- </Panel>
    </div> -->
    <!-- <Footer /> -->
</template>

<script setup lang="ts">
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    // import NavBar from '/src/components/NavBar.vue';
    // import ImageBackground from '/src/components/ImageBackground.vue';
    // import Panel from '/src/components/Panel.vue';
    // import Footer from '/src/components/Footer.vue';

    const httpReq = ref();

    onMounted(async () => {
        try {
            const response = await fetch('https://hpb-hfh3f7dcckethfg8.westeurope-01.azurewebsites.net/api/HttpExample');
            
            if (!response.ok) { console.log("Error on get Request") };

            console.log('response: ', response)

            httpReq.value = response.text();

        } catch (err) {
            console.log('Error: ', err);
        }

    });

</script>

<style scoped>
    /* .bg-default {
        background-color: rgba(22, 24, 31);
    }

    .c-default {
        color: rgb(242, 239, 234);
    } */

</style>