import { ref } from 'vue';

const showBooking = ref(false);
const showCalendarEvent = ref(false);
const currentYear = ref(new Date().getFullYear());
const currentDate = ref(new Date());
const oneYearFromNow = ref(new Date(currentYear.value + 1, new Date().getMonth(), new Date().getDay()))

type calendarItem = {
    id: number,
    name: string,
    location: string,
    startDate: Date,
    endDate?: Date,
    color?: string,
    link?: string,
    booking_ID?: number | null,
}

type bookingItem = {
    id: number,
    name: string,
    phone: string,
    location: string,
    calendar_ID?: number,
    type: string,
    email: string,
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
        name: 'Sveio Festivalen',
        location: 'Sveio',
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

// const dsBookings = ref<bookingItem>([
    // id: number,
    // name: string,
    // phone: string,
    // location: string,
    // calendar_ID?: number,
    // type: string,
    // email: string,
// ]);

export { dsCalendar, currentYear, showCalendarEvent, showBooking, oneYearFromNow, currentDate }
