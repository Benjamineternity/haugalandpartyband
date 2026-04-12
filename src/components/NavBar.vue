<template>
    <nav class="nav-default navbar c-default d-none d-md-flex justify-content-start">
        <div class="nav-item ms-2" title="Haugaland Party Band" style="margin-left:10% !important;">
            <button class="btn btn-sm justify-content-center" @click="goTo(1)">
                <span class="c-default funnyFont">Haugaland Party Band</span>
                <!-- <img style="bottom:10px" src="/src/images/logoNavbar.png" width="50" height="50" /> 
                    fix later, logo needs to be white
                -->
            </button>
        </div>
        <div class="nav-item" title="Kalender">
            <button class="btn btn-sm c-default" @click="goTo(4)">
                <span class="c-default funnyFont">Kalender</span>
            </button>
        </div>
        <div class="nav-item" title="Kalender">
            <button class="btn btn-sm c-default" @click="goTo(5)">
                <span class="c-default funnyFont">Bandet</span>
            </button>
        </div>
        <!-- <div class="nav-item" title="Butikk">
            <button class="btn btn-sm c-default" @click="goTo(6)">
                <span class="c-default funnyFont">Butikk</span>
            </button>
        </div> -->
        <!-- <div class="nav-item" title="Galleri">
            <button class="btn btn-sm c-default" @click="goTo(2)">
                <span class="c-default funnyFont">Galleri</span>
            </button>
        </div>
        <div class="nav-item" title="Anmeldelser">
            <button class="btn btn-sm c-default" @click="goTo(3)">
                <span class="c-default funnyFont">Anmeldelser</span>
            </button>
        </div> -->
    </nav>
    <nav class="nav-default navbar c-default d-flex d-md-none position-absolute">
        <div class="nav-item ms-2" title="Haugaland Party Band">
            <button class="btn btn-sm fs-5" @click="goTo(1)">
                <span class="c-default funnyFont">Haugaland Party Band</span>
            </button>
        </div>
        <div class="nav-item dropdown">
            <button class="btn c-default " data-bs-toggle="dropdown">
                <i class="bi bi-list fs-3"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-end bg-default">
                <a class="dropdown-item funnyFont c-default bg-default" style="cursor:pointer; width:fit-content" href="/kalender/">Kalender</a>
                <a class="dropdown-item funnyFont c-default bg-default" style="cursor:pointer; width:fit-content" href="/omoss/">Bandet</a>
                <!-- <a class="dropdown-item funnyFont c-default bg-default" style="cursor:pointer; width:fit-content" href="/butikk/">Bandet</a> -->
                <!-- <a class="dropdown-item funnyFont c-default bg-default" style="cursor:pointer; width:fit-content" href="/galleri/">Galleri</a>
                <a class="dropdown-item funnyFont c-default bg-default" style="cursor:pointer; width:fit-content" href="/anmeldelser/">Anmeldelser</a> -->
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
    const base = import.meta.env.BASE_URL;

    function goTo(e: number | null) {
        switch (e) {
            case 1: window.location.href = `${base}`; break;
            case 2: window.location.href = `${base}galleri/`; break;
            case 3: window.location.href = `${base}anmeldelser/`; break;
            case 4: window.location.href = `${base}kalender/`; break;
            case 5: window.location.href = `${base}omoss/`; break;
            case 6: window.location.href = `${base}butikk/`; break;
            default: return;
        }
    }

</script>

<style scoped>
    .nav-default {
        height: 7%;
        width: 100%;
        --bs-bg-opacity: 0.5;
        background-color: rgba(22, 24, 31, var(--bs-bg-opacity));
        z-index: 999;
        gap: 2rem;
        top: 0;
        left: 0;
        position: absolute !important;
    }

    .funnyFont {
        font-family: 'Comic Sans MS';
    }

    .c-default {
        color: rgb(242, 239, 234);
    }

    .btn {
        font-size: 1.2rem;
    }

    .bg-default {
        background-color: rgba(22, 24, 31);
    }

    @media screen and (max-width: 900px) {
        .nav-default {
            gap: 1rem;
            position: absolute !important;
        }
    }

    @media screen and (max-width: 400px) {
        .btn {
            padding: 0;
            margin: 0;
            margin-right: 0.3rem;
            font-size: 1rem;
        }
    }

</style>