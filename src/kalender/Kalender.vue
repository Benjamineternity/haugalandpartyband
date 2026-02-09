<template>
    <!-- <ImageBackground /> --> <!-- Dont have the need for picture bg on every site -->
    <div class="w-100 h-100 calContainer bg-default">
        <NavBar />
        <div class="container p-0 m-0 calContainer">
            <div ref="refCalendar" class="calendar container m-0 p-0 calContainer mt-2"></div>
        </div>
        <Footer />
    </div>
    <CalendarModal :events="calEvent" :day="toDay" />
</template>

<script setup>
    import { onMounted, ref, onBeforeUnmount } from 'vue';
    import Calendar from 'js-year-calendar';
    import 'js-year-calendar/dist/js-year-calendar.css';

    import NavBar from '/src/components/NavBar.vue';
    import ImageBackground from '/src/components/ImageBackground.vue';
    import Panel from '/src/components/Panel.vue';
    import Footer from '/src/components/Footer.vue';
    import CalendarModal from '/src/components/CalendarModal.vue';

    import { dsCalendar, currentYear, showCalendarEvent } from '/src/shared.ts';

    const toDay = ref();
    const calEvent = ref();
    const refCalendar = ref();
    const coolCalendar = ref();

    onMounted(() => {
        loadCalendar();
    });

    onBeforeUnmount(() => {
        refCalendar.value.remove();
        refCalendar.value = null;
    });

    const loadCalendar = () => {
        coolCalendar.value = new Calendar(refCalendar.value ? refCalendar.value : '.calendar', {
            style: 'background',
            minDate: new Date(2020, 0, 1),
            maxDate: new Date(currentYear.value + 10, 0, 0),
            clickDay: function(e) {
                if (e.events.length > 0) {
                    showCalendarEvent.value = true;
                    calEvent.value = e.events;
                    toDay.value = e.date;
                }
            },
            dataSource: dsCalendar.value,
            // setNumberMonthsDisplayed: 10,
        });
        console.log(coolCalendar.value) // for more info of the calendar
    }
    

</script>

<style scoped>
    .bg-default {
        background-color: rgb(28, 26, 22) ;
    }

    .c-default {
        color: rgb(242, 239, 234);
    }

    .calendar {
        left: 5%;
        right: 5%;
        position: absolute;
        width: 90%;
        height: 70%;
        background-color: rgba(22, 24, 31, var(--bs-bg-opacity));
        color: rgb(242, 239, 234);
        z-index: 999;
    }

    .calContainer {
        background-color: #2e2d2d;
    }

    .custDiav {
        z-index: 999;
        position: absolute;
    }

</style>