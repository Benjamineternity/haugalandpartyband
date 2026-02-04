<template>
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
            <button class="btn btn-sm fs-5 c-default" @click="goTo(5)">
                <span class="c-default">Kalender</span>
            </button>
        </div>
    </nav>
</template>

<script setup lang="ts">
    import Panel from './components/Panel.vue';
    import Footer from './components/Footer.vue';
    import ImageBackground from './components/ImageBackground.vue';

    function goTo(e: number | null) {
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