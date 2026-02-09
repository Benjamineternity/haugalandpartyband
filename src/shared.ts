import { ref } from 'vue';

const showCalendarEvent = ref(false);
const currentYear = ref(new Date().getFullYear());

type calendarItem = {
    id: number,
    name: string,
    location: string,
    startDate: Date,
    endDate: Date,
    color: string,
    link: string,
}

const dsCalendar = ref<calendarItem[]>([
    {
        id: 0,
        name: 'Sildajazz',
        location: 'Haugesund',
        startDate: new Date(2026, 6, 3),
        endDate: new Date(2026, 6, 10),
        color: '#195939', // (25,89,57)
        link: 'https://sildajazz.no/'
    },
    {
        id: 1,
        name: 'Sildajazz',
        location: 'Haugesund',
        startDate: new Date(2026, 7, 12),
        endDate: new Date(2026, 7, 13),
        color: '#0e0769ff',
        link: 'https://www.facebook.com/p/Sveio-Festivalen-61566542897666/'
    },
    {
        id: 2,
        name: 'BERGEN',
        location: 'BERGEN',
        startDate: new Date(2026, 7, 12),
        endDate: new Date(2026, 7, 13),
        color: '#0e0769ff',
        link: 'https://www.google.com/'
    }
]);



export { dsCalendar, currentYear,showCalendarEvent }