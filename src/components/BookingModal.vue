<template>
    <dialog v-if="showBooking" ref="customDialog" backdrop draggable="true" @shown="setDate" open class="customDialog">
        <div class="modal-header header-card-bg">
            <h5 class="ms-2 mt-3">Booking</h5>
        </div>
        <div class="modal-body gap-3 ms-3 me-3">
            <div class="row justify-content-between">
                <div class="col col-auto">
                    <label for="name">Navn:</label>
                    <input class="form-control form-control-sm bInput" type="text" v-model="pName" name="name" id="name" autoCapitalize required />
                </div>
                <div class="col col-auto">
                    <label for="email">Email:</label>
                    <input class="form-control form-control-sm bInput" type="email" v-model="pEmail" name="email" id="email" required />
                </div>
            </div>

            <div class="row justify-content-between mt-2">
                <div class="col col-auto">
                    <label for="telefon">Telefon:</label>
                    <input class="form-control form-control-sm bInput" type="tel" v-model="pPhone" name="telefon" id="telefon" required />
                </div>
                <div class="col col-auto">
                    <label for="dato">Dato:</label>
                    <input type="date" class="form-control form-control-sm bInput" id="dato" name="dato" v-model="pDate" /> <!--:min="currentDate" :max="oneYearFromNow" :value="new Date()"-->
                </div>
            </div>

            <div class="row justify-content-between mt-2">
                <div class="col col-auto">
                    <label for="sted">Sted / Adresse:</label>
                    <input type="text" class="form-control form-control-sm bInput" id="sted" name="sted" v-model="pLocation" />
                </div>
                <div class="col col-auto">
                    <label for="type">Privat / Offentlig</label> <!-- Make radio buttons or bool -->
                    <select name="type" id="type" class="form-control form-control-sm bInput" v-model="pType">
                        <option value="Privat">Privat</option>
                        <option value="Offentlig">Offentlig</option>
                    </select>
                </div>
            </div>

            <div class="col col-auto mt-2" v-if="pType === 'Offentlig'">
                <label for="link">Link / Url:</label>
                <input type="url" class="form-control form-control-sm bInput" id="link" name="link" v-model="pLink" />
            </div>
            

            <div class="col col-auto mt-2">
                <label for="textArea">Tileggsinformasjon:</label>
                <div id="textArea">
                    <TextArea class="form-control form-control-sm" style="max-height:400px; height:100px" v-model="pText" placeholder="Noe annet vi bør vite? Ønsker av sanger, tema..."></TextArea>
                </div>
            </div>
        </div>
        <div class="modal-footer mt-2">
            <button @click="reset" class="btn btn-sm btn-secondary c-default me-2 mt-2 mb-1">
                Lukk
            </button>
            <button class="btn btn-sm btn-primary mt-2 me-2 mb-1" @click="submitBooking"> <!--text-primary-->
                Send booking
            </button>
        </div>
    </dialog>
</template>

<script setup>
    import { ref, onMounted, computed } from 'vue';

    import { showBooking, dsCalendar } from '../shared.ts';

    const pName = ref('');
    const pEmail = ref('');
    const pPhone = ref('');
    const pDate = ref(new Date());
    const pText = ref();
    const pLocation = ref('');
    const pType = ref("");
    const pLink = ref();

    /* // Implement later
    const pPhoneFormatted = computed(() => {
        // return pPhone.value.replace(/(\d{3})(\d{2})(\d{3})/, "$1 $2 $3");
        const digits = pPhone.value.replace(/\D/g, "") // remove non-numbers

        if (digits.length !== 8) return phone.value

        return `${digits.slice(0,3)} ${digits.slice(3,5)} ${digits.slice(5)}`
    });
    */

    const props = defineProps({
        bookingDate: {
            type: Date,
        }
    });

    onMounted(() => {
        window.addEventListener('keydown', onKeydown);
    });

    const onKeydown = (e) => {
        if (e.key === 'Escape') {
            showBooking.value = false;
        }
    }

    const submitBooking = () => {
        if (pName.value === '' || pEmail.value === '' || pPhone.value === '' || pDate.value === '' || pLocation === '') {
            alert('Navn, Email, Telefon og Dato må fylles ut før du sender booking.');
            return;
        }

        for (let id = 0; id < dsCalendar.value.length; id++) {
            if (dsCalendar.value[id].startDate === pDate.value || dsCalendar.value[id].endDate === pDate.value) {
                alert('Vi er desverre booket den dagen, prøv å velg en annen');
            }
        }

        alert("Vi vil ta kontakt med deg så fort som mulig for å bekrefte bookingen, ha en god dag videre!");

        const isMobile = ref(window.matchMedia("max-width <= 768px").matches);

        reset();

        alert("booking kommer senere")
    }

    const setDate = () => {
        if (props.bookingDate) {
            pDate.value = props.bookingDate;
        }
    }

    const reset = () => {
        pName.value = '';
        pEmail.value = '';
        pPhone.value = '';
        pDate.value = new Date();
        pText.value = null;
        showBooking.value = false;
    }
</script>

<style scoped>
    .customDialog {
        width: 500px;
        min-width: fit-content;
        height: 450px;
        min-height: fit-content;
        top: 10%;
        left: 27.5%;
        bottom: 50%;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        border-bottom: 2px solid rgb(58, 58, 59);
        border-radius: 8px;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        background-color: rgb(58, 58, 59);
        color: rgb(242, 239, 234);
        padding: 0;
        margin: 0;
    }

    .bInput {
        min-width: fit-content;
        max-width: 200px;
    }

    .c-default {
        color: rgb(242, 239, 234);
    }

    .header-card-bg {
        border: 1px solid rgb(22, 24, 31);
        border-radius: 8px;
        --bs-bg-opacity: 0.5;
        background-color: rgba(22, 24, 31, var(--bs-bg-opacity));
    }

    .bg-default {
        --bs-bg-opacity: 0.5;
        background-color: rgb(58, 58, 59); /*rgba(22, 24, 31, var(--bs-bg-opacity)); */
    }

    .card-bg {
        border: 1px solid rgb(22, 24, 31);
        border-radius: 8px;
        --bs-bg-opacity: 0.5;
        background-color: rgba(22, 24, 31, var(--bs-bg-opacity));
    }

    .extra-border {
        border: 1px solid rgb(13,110,253);
        border-radius: 4px;
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