<template>
    <!-- <NavBar /> -->
    <!-- <ImageBackground /> -->
    <!-- <div class="bg-default">
        <Panel :text="'Booking'"> -->
            <p class="text-center">Book oss i dag!</p>
            <h3 class="text-center">BETA</h3>
            <h6 class="text-center">For questions or features send a mail to Benjamin.hole@outlook.com please</h6><br>
            <div class="container" style="height:500px; width:100%;">
                {{ albums }}
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

    const albums = ref<string | null>(null);
    const STORAGE_KEY = 'fb_albums_cache';
    const CACHE_DURATION = 10 * 60 * 1000;

    interface CachedData {
        data: string
        timestamp: number
    }

    onMounted(async () => {
        const cached = localStorage.getItem(STORAGE_KEY)

        if (cached) {
            const parsed: CachedData = JSON.parse(cached);

            const isFresh = Date.now() - parsed.timestamp < CACHE_DURATION;

            if (isFresh) {
                albums.value = parsed.data;
            }
        }

        try {
            const response = await fetch('https://hpb-hfh3f7dcckethfg8.westeurope-01.azurewebsites.net/api/GetFBPhotos');

            if (!response.ok) { return console.log('API error: ', response); };

            const data = await response.text();

            albums.value = data;

            const cacheObject: CachedData = {
                data,
                timestamp: Date.now()
            }

            localStorage.setItem( STORAGE_KEY, JSON.stringify(cacheObject) );

        } catch (error) {
            console.log('API failed, using cached data if available')
        }
    })

</script>

<style scoped>
    /* .bg-default {
        background-color: rgba(22, 24, 31);
    }

    .c-default {
        color: rgb(242, 239, 234);
    } */

</style>