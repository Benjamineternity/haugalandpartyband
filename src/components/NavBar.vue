<template>
    <nav class="navbar gap-3 nav-default justify-content-start fs-5 c-default">
        <div class="nav-item" style="margin-left: 10%; overflow: hidden;" title="Haugaland Party Band">
            <button class="btn btn-sm fs-5" @click="goTo(1)">
                <span class="c-default">Haugaland Party Band</span>
            </button>
        </div>
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
        <div class="nav-item" title="Kalender" style="overflow: hidden;">
            <button class="btn btn-sm fs-5 c-default" @click="goTo(4)">
                <span class="c-default">Kalender</span>
            </button>
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
            // case 4: window.location.href = "/kontakt/"; break; // deprecated ??
            case 4: window.location.href = `${base}kalender/`; break;
            default: return;
        }
    }

</script>

<style scoped>
    .nav-default {
        overflow: hidden;
        height: 7%;
        --bs-bg-opacity: 0.5;
        background-color: rgba(22, 24, 31, var(--bs-bg-opacity));
        z-index: 999;
    }

    .c-default {
        color: rgb(242, 239, 234);
    }

    @media screen and (max-width: 800px) {
        .nav-default {
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        .nav-item {
            max-width: 25%;
            padding: 0;
        }
    }

</style>