<template>
    <dialog v-if="showBooking" ref="customDialog" @shown="setDate" open @keypress="keyPressFunc" class="customDialog">
        <div class="modal-header">
            <h5 class="ms-2 mt-3">Book oss</h5>
        </div>
        <div class="modal-body ms-3 col">
            <label for="name">Navn:</label>
            <input class="form form-control" type="text" v-model="pName" name="name" id="name" autoCapitalize required />

            <label for="email">Email:</label>
            <input class="form form-control" type="text" v-model="pEmail" name="email" id="email" required />

            <label for="telefon">Telefon:</label>
            <input class="form form-control" type="text" v-model="pPhone" name="telefon" id="telefon" required />

            <label for="dato">Dato:</label>
            <input type="date" class="form form-control" id="dato" name="dato" v-model="pDate" :min="currentDate" :max="oneYearFromNow" /> <!--:value="new Date()"-->

            <label for="sted">Sted / Adresse:</label>
            <input type="text" class="form form-control" id="sted" name="sted" v-model="pLocation" />

            <label for="type">Privat / Offentlig</label>
            <select name="type" id="type" v-model="pType">
                <option value="Privat">Privat</option>
                <option value="Offentlig">Offentlig</option>
            </select>

            <label v-if="pType === 'Offentlig'" for="link">Link:</label>
            <input type="text" class="form form-control" id="link" name="link" v-model="pLink" />

            <div id="textArea">
                <!-- <TextArea class="form form-control" v-model="pText"></TextArea> -->
            </div>
            
        </div>
        <div class="modal-footer mt-2">
            <button @click="reset" class="btn btn-sm btn-secondary c-default me-2">
                Lukk
            </button>
            <button class="btn btn-sm text-primary" @click="submitBooking">
                Send Forespørsel om booking
            </button>
        </div>
    </dialog>
</template>

<script setup>
    import { ref } from 'vue';

    import { showBooking, dsCalendar, currentDate, oneYearFromNow } from '/src/shared.ts';

    const pName = ref('');
    const pEmail = ref('');
    const pPhone = ref('');
    const pDate = ref(new Date());
    const pText = ref();
    const pLocation = ref('');
    const pType = ref('Privat');
    const pLink = ref();

    const props = defineProps({
        bookingDate: {
            type: Date,
        }
    });

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

        const newId = dsCalendar.value.length;

        dsCalendar.push({
            id: newId,
            name: pName.value,
            location: pLocation.value,
            startDate: pDate.value,
            endDate: pDate.value,
            color: pType.value === 'Offentlig' ? '#195939' : pType.value === 'Privat' ? 'red' : 'blue',
            link: pLink.value ? pLink.value : ''
        });

        reset();
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
        height: 250px;
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

    .c-default {
        color: rgb(242, 239, 234);
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