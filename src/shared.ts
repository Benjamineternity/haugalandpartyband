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
    private?: boolean,
}
    // #880808 Privat
    // #195939 Offentlig
const dsCalendar = ref<calendarItem[]>([
    {
        id: 0,
        name: 'Sildajazz',
        location: 'Haugesund',
        startDate: new Date(2026, 6, 3),    // YYYY M D // Month is indexed from 0
        endDate: new Date(2026, 6, 3),      // YYYY M D // Month is indexed from 0
        color: '#195939',
        link: 'https://sildajazz.no/',
        private: false,
    },
    {
        id: 1,
        name: '', // Sveio Festivalen
        location: '', // Sveio
        startDate: new Date(2026, 7, 12),
        endDate: new Date(2026, 7, 12),
        color: '#880808',
        link: '', //'https://www.facebook.com/p/Sveio-Festivalen-61566542897666/',
        private: true,
    },
    {
        id: 2,
        name: 'Mortholmen',
        location: 'Mortholmen - Koppervik',
        startDate: new Date(2026, 3, 4),
        endDate: new Date(2026, 3, 4),
        color: '#195939',
        link: 'https://mortholmen.no/kaskjer/Haugaland-partyband/',
        private: false,
    },
    {
        id: 3,
        name: 'Privat',
        location: 'Privat',
        startDate: new Date(2026, 5, 13),
        endDate: new Date(2026, 5, 13),
        color: '#880808',
        link: '',
        private: true,
    },
    {
        id: 4,
        name: 'Privat',
        location: 'Privat',
        startDate: new Date(2026, 5, 20),
        endDate: new Date(2026, 5, 20),
        color: '#880808',
        link: '',
        private: true,
    },
    {
        id: 5,
        name: 'Privat',
        location: 'Privat',
        startDate: new Date(2026, 7, 15),
        endDate: new Date(2026, 7, 15),
        color: '#880808',
        link: '',
        private: true,
    }
]);

export { dsCalendar, currentYear, showCalendarEvent, showBooking, oneYearFromNow, currentDate }
