<template>
    <nav class="nav-default navbar fs-5 c-default d-none d-md-flex">
        <div class="nav-item ms-2" title="Haugaland Party Band">
            <button class="btn btn-sm fs-5" @click="goTo(1)">
                <span class="c-default">Haugaland Party Band</span>
            </button>
        </div>
        <div class="nav-item" title="Kalender" style="overflow: hidden;">
            <button class="btn btn-sm fs-5 c-default" @click="goTo(4)">
                <span class="c-default">Kalender</span>
            </button>
        </div>
        <!-- <div class="nav-item" title="Kalender" style="overflow: hidden;">
            <button class="btn btn-sm fs-5 c-default" @click="goTo(5)">
                <span class="c-default">Booking</span>
            </button>
        </div> -->
        <div class="nav-item" title="Galleri" style="overflow: hidden;">
            <button class="btn btn-sm fs-5 c-default" @click="goTo(2)">
                <span class="c-default">Galleri</span>
            </button>
        </div>
        <div class="nav-item" title="Anmeldelser" style="overflow: hidden;">
            <button class="btn btn-sm fs-5 c-default" @click="goTo(3)">
                <span class="c-default">Anmeldelser</span>
            </button>
        </div>
    </nav>
    <nav class="nav-default navbar fs-5 c-default d-flex d-md-none">
        <div class="nav-item ms-2" title="Haugaland Party Band">
            <button class="btn btn-sm fs-5" @click="goTo(1)">
                <span class="c-default">Haugaland Party Band</span>
            </button>
        </div>
        <div class="nav-item dropdown">
            <button class="btn c-default dropdown-toggle" data-bs-toggle="dropdown">
                <!-- <i class="bi bi-caret-down-fill ms-1"></i> -->
                <span class="navbar-toggler-icon c-default"></span>
            </button>
            <div class="dropdown-menu bg-default">
                <a class="dropdown-item c-default bg-default" style="cursor:pointer" href="/kalender/">Kalender</a>
                <a class="dropdown-item c-default bg-default" style="cursor:pointer" href="/galleri/">Galleri</a>
                <a class="dropdown-item c-default bg-default" style="cursor:pointer" href="/anmeldelser/">Anmeldelser</a>
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
            case 5: window.location.href = `${base}booking/`; break;
            default: return;
        }
    }

</script>

<style scoped>
    .nav-default {
        /* overflow: hidden; */
        height: 7%;
        --bs-bg-opacity: 0.5;
        background-color: rgba(22, 24, 31, var(--bs-bg-opacity));
        z-index: 999;
        justify-content: start;
        gap: 3rem;
    }

    .c-default {
        color: rgb(242, 239, 234);
    }

    .bg-default {
        background-color: rgba(22, 24, 31);
    }

</style>