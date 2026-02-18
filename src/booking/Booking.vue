<template>
    <!-- <NavBar /> -->
    <!-- <ImageBackground /> -->
    <!-- <div class="bg-default">
        <Panel :text="'Booking'"> -->
            <p class="text-center">Book oss i dag!</p>
            <h3 class="text-center">BETA</h3>
            <h6 class="text-center">For questions or features send a mail to Benjamin.hole@outlook.com please</h6><br>
            <div class="container" style="height:500px; width:100%;" :key="thisthing" ref="divcont">
                {{ httpReq }}
            </div>
        <!-- </Panel>
    </div> -->
    <!-- <Footer /> -->
</template>

<script setup lang="ts">
    import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
    // import NavBar from '/src/components/NavBar.vue';
    // import ImageBackground from '/src/components/ImageBackground.vue';
    // import Panel from '/src/components/Panel.vue';
    // import Footer from '/src/components/Footer.vue';

    const httpReq = ref();
    const thisthing = ref(1);
    const divcont = ref();

    watch(httpReq, () => {
        thisthing.value ++;
    })

    onMounted(async () => {
        try {
            const response = await fetch('https://hpb-hfh3f7dcckethfg8.westeurope-01.azurewebsites.net/api/HttpExample');
            
            if (!response.ok) {
                console.log("Error on get Request");
                return;
            }

            const text = await response.text();
            httpReq.value = text;

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