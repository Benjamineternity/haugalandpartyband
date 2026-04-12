<template>
    <NavBar />
    <ImageBackground />
    <Panel>
        <template #header1>
            Norges Beste Coverband
        </template>
        <template #content1>
            <div>
                <p>Bandet består av fem unge menn som har spilt opp til dans i flere år, tross sin unge alder.</p>
                <p>Med haugevis av slagere fra 70-, 80- og 90-tallet, blir det garantert allsang og god stemning!</p>
                <br>
            </div>
        </template>
    </Panel>
    <div class="partnerListContainer">
        <div class="partnerlist" ref="partnerItem">
            <div class="c-default partnerItem" v-for="item in partnerList">
                <p class="logo ms-2 me-2" style="font-size: 16px;">{{ item }}</p>
            </div>

            <div class="c-default partnerItem" v-for="item in partnerList">
                <p class="logo ms-2 me-2" style="font-size: 16px;">{{ item }}</p>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
    import { ref, onMounted } from 'vue';

    import NavBar from '/src/components/NavBar.vue';
    import ImageBackground from '/src/components/ImageBackground.vue';
    import Panel from '/src/components/Panel.vue';
    import Footer from '/src/components/Footer.vue';

    const partnerList = ref(['Aibel', 'Hatteland', 'Røde Kors', 'Maritim Uke', 'Holdeplassen']); //, 'Sildajazz', 'Koppervikfestivalen', 'Sveiofestivalen', 'Konsertkompaniet']);
    const partnerItem = ref();

    onMounted(() => {
        setInterval(() => {
            partnerItem.value.scrollLeft +=1;

            if (partnerItem.value.scrollLeft >= partnerItem.value.scrollWidth - partnerItem.value.clientWidth) {
                partnerItem.value.scrollLeft = 0;
            }
        }, 20)
    });
</script>

<style scoped>
    .bg-default {
        --bs-bg-opacity: 0.5;
        background-color: rgba(22, 24, 31, var(--bs-bg-opacity));
    }

    .c-default {
        color: rgb(242, 239, 234);
    }

    .partnerListContainer {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100px;
        min-height: fit-content;
        margin-bottom: 5%;

        overflow: hidden;
        position: relative;
        /* display: inline-block; */
    }

    .partnerlist {
        width: 80%;
        height: 100%;
        margin-left: 10%;
        margin-right: 10%;
        display: flex;
        /* border-top: 2px solid rgb(22, 24, 31);
        border-bottom: 2px solid rgb(22, 24, 31); */
        justify-content: center;
        align-items: center;
        overflow: hidden;
        gap: 2rem;

        
        display: flex;
        animation: scroll 10s linear infinite;
    }
    
    .partnerListContainer::after {
        content: "";
        position: absolute;
        inset: -40px;
        z-index: 1;

        background: radial-gradient(
            circle at center,
            rgba(22, 24, 31, 0.5) 0%,
            rgba(22, 24, 31, 0.3) 30%,
            rgba(22, 24, 31, 0.3) 55%,
            rgba(22, 24, 31, 0.3) 80%,
            rgba(22, 24, 31, 0.2) 90%,
            rgba(22, 24, 31, 0.1) 100%
        );

        filter: blur(20px);
        border-radius: 20px;
    }

    .partnerItem {
        flex: 1 1 1;
        min-width: 120px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo {
        padding: 0;
        margin-bottom: 0;
        min-width: fit-content;
    }

    .partnerItem p:first-of-type {
        margin-left: 0;
        border-left: none;
    }

    .partnerItem p:last-of-type {
        margin-right: 0;
        border-right: none;
    }

</style>