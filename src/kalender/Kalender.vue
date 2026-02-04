<template>
    <NavBar />
    <!-- <ImageBackground /> -->
    <!-- <div class="" style="bottom: 0; top: 0;">
        <div data-provide="calendar"  class="calendar "></div>
    </div> -->
    <div class="calendar"></div>
    <Footer />
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import Calendar from 'js-year-calendar';
    import 'js-year-calendar/dist/js-year-calendar.css';

    import NavBar from '/src/components/NavBar.vue';
    import ImageBackground from '/src/components/ImageBackground.vue';
    import Panel from '/src/components/Panel.vue';
    import Footer from '/src/components/Footer.vue';

    const coolCalendar = ref();

    onMounted(() => {
        const number = (new Date().getFullYear() + 11).toString();
        coolCalendar.value = new Calendar('.calendar', {
            style: 'custom',
            minDate: new Date('2019/01/01'),
            maxDate: new Date(number, 0, 0)
        });
    });

</script>

<style scoped>
    .bg-default {
        background-color: rgb(28, 26, 22) ;
    }

    .c-default {
        color: rgb(242, 239, 234);
    }

    .calendar {
        width: 90%;
        height: 90%;
        /* --bs-bg-opacity: 0.5; */
        /* background-color: rgba(22, 24, 31, var(--bs-bg-opacity)); */
        z-index: 999;
    }


</style>