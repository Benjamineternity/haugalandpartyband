<template>
    <dialog v-if="showCalendarEvent"  ref="customDialog" open @keypress="keyPressFunc" class="customDialog"> <!--v-show="showCalendarEvent" draggable="true"-->
        <div class="c-modal-header">
            {{ props.events.length > 1 ? 'Arrangementer' : 'Arrangement' }}: {{ formatDate(props.day) }}
        </div>
        <div class="events" v-for="event in props.events" :key="event.id">
            <p class="mb-1"><i class="bi bi-bell me-1"></i>{{ event.name }}</p>
            <p class="mb-1"><i class="bi bi-geo-alt me-1"></i>{{ event.location }}</p>
            <p class="mb-1"><i class="bi bi-calendar-check me-1"></i>{{ formatDate(event.startDate) }} - {{ formatDate(event.endDate) }}</p> <!--:class="props.events.length > 1 ? 'more-events' : ''"-->
        </div>
        <div class="modal-footer">
            <div class="mt-2 d-flex">
                <button @click="showCalendarEvent = false" class="btn btn-sm btn-secondary c-default me-2">
                    Lukk
                </button>
                <div v-if="props.events.length > 1" class="dropdown extra-border">
                    <button class="btn btn-sm c-default dropdown-toggle" data-bs-toggle="dropdown">
                        Gå til arrangementene
                    </button>
                    <div class="dropdown-menu bg-default">
                        <a v-for="event in props.events" @click="gotoLinks(event.id)" style="cursor: pointer" class="dropdown-item c-default bg-default">{{ event.name }}</a>
                    </div>
                </div>
                <button v-else @click="gotoLink" class="btn btn-sm c-default btn-outline-primary">
                    Gå til arrangement<i class="bi bi-arrow-right ms-1"></i>
                </button>
            </div>
        </div>
    </dialog>
</template>

<script setup>
    import { onMounted } from 'vue';

    import { showCalendarEvent, dsCalendar } from '/src/shared.ts';

    onMounted(() => {
        window.addEventListener('keydown', onKeydown);
    });

    const props = defineProps({
        events: {
            type: Object,
        },
        day: {
            type: Date,
        }
    });

    const gotoLink = () => {
        if (!props.events[0].link) {
            alert('Ingen link til dette arrangementet')
        } else {
            window.open(props.events[0].link);
        }
    }

    const gotoLinks = (e) => {
        if (!dsCalendar._value[e].link) {
            alert('Ingen link til dette arrangementet')
        } else {
            console.log(dsCalendar._value[e].link)
            window.open(dsCalendar._value[e].link);
        }
    }

    const onKeydown = (e) => {
        if (e.key === 'Escape') {
            showCalendarEvent.value = false;
        }
    }

    const formatDate = (date) => {
        let temp = date.toLocaleDateString('nb-NO', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        }).replace('.', '');

        return temp[0].toUpperCase() + temp.slice(1);
    }

    function keyPressFunc(e) {
        // console.log(e) // e.key
    }

</script>

<style scoped>

    .customDialog {
        width: 45%;
        min-width: 350px;
        height: 40%;
        min-height: 34%;
        top: 10%;
        left: 27.5%;
        bottom: 50%;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        border: 2px solid rgb(58, 58, 59);
        border-radius: 8px;
        background-color: rgb(58, 58, 59);
        color: rgb(242, 239, 234);
        padding: 0;
        margin: 0;
    }

    .c-default {
        color: rgb(242, 239, 234);
    }

    .bg-default {
        --bs-bg-opacity: 0.5;
        background-color: rgb(58, 58, 59); /*rgba(22, 24, 31, var(--bs-bg-opacity)); */
    }

    .extra-border {
        border: 1px solid rgb(13,110,253);
        border-radius: 4px;
    }

    .c-modal-header {
        width: fit-content;
        height: 10%;
        border-bottom: 1px solid rgb(0, 0, 0);
        margin-top: 1%;
        margin-left: 2%;
        font-size: 1.2rem;
    }

    .modal-footer {
        height: 'fit-content';
        margin-top: auto;
        margin-bottom: 3px;
        margin-right: 3px;
        border-top: 1px solid rgb(0, 0, 0);
    }

    .events {
        margin-top: 6px;
        margin-left: 3%;
        height: fit-content;
        max-height: 75%;
    }

    dialog::backdrop {
        background: rgba(0, 0, 0, 1);
    }

</style>