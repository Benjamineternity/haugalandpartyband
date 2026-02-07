<template>
    <!-- <ImageBackground /> -->
    <div class="w-100 h-100 calContainer">
        <NavBar />
        <div class="container p-0 m-0 calContainer">
            <div data-provide="calendar" ref="refCalendar" class="calendar container m-0 p-0 calContainer mt-2"></div> <!--:key="num1"-->
        </div>
        <Footer />
    </div>
</template>

<script setup>
    import { onMounted, ref, onBeforeUnmount } from 'vue';
    import Calendar from 'js-year-calendar';
    import 'js-year-calendar/dist/js-year-calendar.css';

    import NavBar from '/src/components/NavBar.vue';
    import ImageBackground from '/src/components/ImageBackground.vue';
    import Panel from '/src/components/Panel.vue';
    import Footer from '/src/components/Footer.vue';

    const coolCalendar = ref();
    const refCalendar = ref();
    const currentYear = ref(new Date().getFullYear());
        
    onMounted(() => {
        loadCalendar();
    });

    onBeforeUnmount(() => {
        console.log('beforeonmuount')
        refCalendar.value.remove();
        refCalendar.value = null;
    });

    const loadCalendar = () => {
        coolCalendar.value = new Calendar(refCalendar.value ? refCalendar.value : '.calendar', {
            style: 'background',
            minDate: new Date(),
            maxDate: new Date(currentYear.value + 1, 0, 0),
            clickDay: function(e) {
                alert('Click on day ' + e.date.toString());
                // Show Modal // 
            },
            dataSource: (period) => {
                console.log(period.year);
            },
            dataSource: [
                {
                    id: 0,
                    name: 'Sildajazz',
                    location: 'Haugesund',
                    startDate: new Date(currentYear.value, 6, 3),
                    endDate: new Date(currentYear.value, 6, 10)
                },
            ],
        });
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

</style>