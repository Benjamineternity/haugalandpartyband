<template>
    <div class="position-absolute bottom-0 w-100" style="max-height: 30%">
        <footer class="footer-default c-default">
            <div class="row ms-5 me-3">

                <div class="col-12 col-md-3 mb-3 mt-3" title="Band Members">
                    <p class="pb-1 d-block small-text-header">Haugaland Party Band</p>
                    <p class="small-text mb-1">Jon Oma Dahle</p>
                    <p class="small-text mb-1">Aage Halleland</p>
                    <p class="small-text mb-1">Mikkel Westye Magnerud</p>
                    <p class="small-text mb-1">Andreas Jøsendal Helgeland</p>
                    <p class="small-text mb-1">Benjamin Hole</p>
                </div>

                <div class="col-12 col-md-3 mb-3 mt-3" title="Contact">
                    <p class="pb-1 d-block small-text-header">Contact</p>
                    <div class="flex-column d-flex">
                        <button class="small-text btn btn-sm text-start p-0" @click="copyPhone" style="width: fit-content;"
                            data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Click to Copy">
                            <i class="bi bi-telephone me-1 c-default"></i><span class="c-default">+47 406 14 867</span>
                        </button>
                        <button class="small-text btn btn-sm text-start p-0 mt-2" @click="copyEmail" style="width: fit-content;"
                            data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Click to Copy">
                            <i class="bi bi-mailbox me-1 c-default"></i><span class="c-default">Asbjorn.helgeland@gmail.com</span>
                        </button>
                    </div>
                </div>

                <div class="col-12 col-md-3 mb-3 mt-3" title="Support">
                    <p class="pb-1 d-block small-text-header">Support</p>
                    <button class="btn btn-sm small-text p-0" @click="copyPhone">
                        <i class="bi bi-currency-dollar c-default"></i>
                    </button>
                    <p class="pb-1 d-block small-text-header mt-2">Links</p>
                    <a class="me-3" href="https://www.facebook.com/HaugalandPartyband"><i class="bi bi-facebook"></i></a>
                    <a href="https://www.Instagram.com/HaugalandPartyband"><i class="bi bi-instagram"></i></a>
                </div>

                <div class="col-12 col-md-3 mb-3 mt-3" title="HPB">
                    <p class="pb-1 d-block small-text-header">HPB</p>
                    <p class="small-text mb-1">Developer: Benjamin Hole</p>
                    <p class="small-text mb-1">All Rights Reserved</p>
                    <a class="small-text c-default text-decoration-none hover-text-decoration-underline" href="https://HaugalandPartyBand.no">
                        <p>©HaugalandPartyBand.no 2026</p>
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>


<script setup lang="ts">
    import { ref } from 'vue';

    const copyPhone = (e: MouseEvent) => {;
        const target = e.target as HTMLElement;
        const innerText : string = target.innerText;
        const phNr = innerText.replace(/\s+/g, '');
        navigator.clipboard.writeText(phNr);
    }

    const copyEmail = (e: MouseEvent) => {;
        const target = e.target as HTMLElement;
        const email : string = target.innerText;
        navigator.clipboard.writeText(email);
    }

</script>

<style scoped>
    .footer-default {
        width: 100%;
        height: 100%;
        --bs-bg-opacity: 0.5;
        background-color: rgba(22, 24, 31, var(--bs-bg-opacity));
    }

    .c-default {
        color: #F2EFEA;
    }

    .small-text {
        font-size: 0.7rem;
    }

    .small-text-header {
        font-size: 0.8rem;
        font-weight: bold;
    }

    .custom-tooltip {
        --bs-tooltip-bg: #FFFFFF;
        --bs-tooltip-color: #F2EFEA;
    }
</style>