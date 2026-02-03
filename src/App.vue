<template>
    <div class="bg-default ">
        <ImageBackground />
        <nav class="navbar gap-3 nav-default justify-content-start fs-5 c-default">
            <div class="nav-item" style="margin-left: 10%">
                <button class="btn btn-sm fs-5" @click="goTo(1)">
                    <span class="c-default">Haugaland Party Band</span>
                </button>
            </div>
            <div class="nav-item">
                <button class="btn btn-sm fs-5 c-default" @click="goTo(2)">
                    <span class="c-default">Galleri</span>
                </button>
            </div>
            <div class="nav-item">
                <button class="btn btn-sm fs-5 c-default" @click="goTo(3)">
                    <span class="c-default">Anmeldelser</span>
                </button>
            </div>
            <div class="nav-item">
                <button class="btn btn-sm fs-5 c-default" @click="goTo(4)">
                    <span class="c-default">Kontakt Oss</span>
                </button>
            </div>
            <div class="nav-item">
                <button class="btn btn-sm fs-5 c-default" @click="goTo(5)">
                    <span class="c-default">Kalender</span>
                </button>
            </div>
            <!-- <div class="nav-item ms-auto me-3">
                <span>Anno 2020</span>
            </div> -->
        </nav>
    
        <div class="w-50 mx-auto" style="position: relative;">
            <Panel :title="'Sales pitch'">
                <!-- Selling points / features and what to expect, basically a sales pitch<br />
                Band member bios / pictures <br />
                Music samples / videos <br />
                Testimonials / reviews <br /> -->
                <!-- would be nice if we wrote something here as<br>
                kanskje noe på engelsk <br>
                kanskje noe på norsk -->
            </Panel>
        </div>

        <Footer />
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

    import Anmeldelser from './Anmeldelser.vue';
    import Kontakt from './Kontakt.vue';
    import Kalender from './Kalender.vue';
    import Galleri from './Galleri.vue';
    import Panel from './components/Panel.vue';
    import Footer from './components/Footer.vue';
    import ImageBackground from './components/ImageBackground.vue';
    
    const url = ref(window.location.search);
    
    function goTo(e: number | null) {
        console.log(url.value)
        if (!e) { window.location.reload(); }

        switch (e) {
            case 1: window.location.href = "/haugalandpartyband/"; break;
            case 2: window.location.href = "/haugalandpartyband/galleri"; break;
            case 3: window.location.href = "/haugalandpartyband/anmeldelser"; break;
            case 4: window.location.href = "/haugalandpartyband/kontakt"; break;
            case 5: window.location.href = "/haugalandpartyband/kalender"; break;
            default: return;
        }
    }

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