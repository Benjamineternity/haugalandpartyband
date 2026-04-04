<template>
    <ImageBackground bg="empty" />
    <NavBar />
    <div class="listContainer"> <!-- Events list -->
        <div class="lists">
            <h5 class="c-default funnyFont mb-3">Kommende arrangement</h5>
            <div v-for="item in sortedEvents" class="c-default">
                <div v-if="!item.private" class="listItems gap-2">
                    <p style="width: 100px;" >{{ formatDate(item.startDate) }}</p> <p :href="item.link">{{ item.name }}</p> <p >-</p> <p :href="item.link">{{ item.location }}</p>
                </div>
                <div v-else class="listItems gap-2">
                    <p style="width: 100px">{{ formatDate(item.startDate) }}</p> <p >Privat arrangement</p>
                </div>
            </div>
        </div>
    </div>

    <div class="customContainer">
        <div ref="refCalendar" class="calendar calContainer"></div>

        <div class="d-flex mt-3 gap-4 justify-content-center align-items-center">
            <p class="c-default ms-2"><i class="bi bi-circle-fill me-2" style="color: #195939"></i>Offentig arrangement</p>
            <p class="c-default"><i class="bi bi-circle-fill me-2" style="color: #880808"></i>Privat arrangement</p>
            <!-- <p class="c-default"><i class="bi bi-circle-fill me-2" style="color: #f59e0b"></i>Under forhandling</p> -->
            <p class="c-default me-2"><i class="bi bi-circle-fill me-2" style="color: #2e2d2d"></i>Ledig</p>
        </div>
    </div>
    <Footer />
    <CalendarModal :events="calEvent" :day="toDay" />
    <BookingModal :bookingDate="bookingDate" />
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
    import BookingModal from '/src/components/BookingModal.vue';

    import { dsCalendar, currentYear, showCalendarEvent, showBooking } from '/src/shared.ts';

    const toDay = ref();
    const calEvent = ref();
    const refCalendar = ref();
    const coolCalendar = ref();
    const bookingDate = ref();
    const isMobile = ref(window.matchMedia("max-width <= 768px").matches);
    const sortedEvents = dsCalendar.value.sort((a, b) => a.startDate - b.startDate);

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
                if (e.events.length > 0 && !e.events[0].private) {
                    showCalendarEvent.value = true;
                    calEvent.value = e.events;
                    toDay.value = e.date;
                } else if (e.events.length === 0) {
                    showBooking.value = true;
                    bookingDate.value = e.date;
                }
            },
            dataSource: dsCalendar.value,
            setNumberMonthsDisplayed: isMobile.value ? 12 : 6,
        });
        // console.log(coolCalendar.value) // for more info of the calendar
    }

    const formatDate = (date) => {
        let temp = date.toLocaleDateString('nb-NO', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        }).replace('.', '');

        return temp[0].toUpperCase() + temp.slice(1);
    }

</script>

<style scoped>
    .bg-default {
        background-color: rgba(22, 24, 31, var(--bs-bg-opacity));
    }

    .funnyFont {
        font-family: 'Comic Sans MS';
    }

    .c-default {
        color: rgb(242, 239, 234);
    }

    p {
        margin: 0;
        margin-bottom: 12px;
        font: 'Archivo Narrow';
        font-size: 16px;
    }

    .listContainer {
        margin-left: 25%;
        display: flex;
    }

    .lists {
        margin-top: 7%;
        background-color: rgba(22, 24, 31, var(--bs-bg-opacity));
        display: flex;
        flex-direction: column;
    }

    .listItems {
        align-items: start;
        display: flex;
    }

    .customContainer {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .calendar {
        margin-top: 3%;
        margin-left: 10%;
        margin-right: 10%;
        background-color: rgba(22, 24, 31, var(--bs-bg-opacity));
        color: rgb(242, 239, 234);
        max-height: 80%;
        min-height: 50%;
        top: 10%;
        overflow-y: auto;
    }

    .calContainer {
        background-color: rgb(46, 45, 45);
    }

    @media screen and (max-width: 1100px) {
        .lists {
            margin-top: 10%;
        }
    }

    @media screen and (max-width: 1000px) {
        .lists {
            margin-top: 12%;
        }
    }

    @media screen and (max-width: 800px) {
        .lists {
            margin-top: 15%;
        }
    }

    @media screen and (max-width: 600px) {
        .lists {
            margin-top: 20%;
        }
    }
    
    @media screen and (max-width: 400px) {
        .lists {
            margin-top: 30%;
        }
    }

    @media screen and (max-width: 300px) {
        .lists {
            margin-top: 40%;
        }
    }

    @media screen and (max-width: 150px) {
        .lists {
            margin-top: 50%;
        }
    }

</style>