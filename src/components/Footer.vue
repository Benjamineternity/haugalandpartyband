<template>
    <div class="c-default position-absolute bottom-0 w-100">
        <footer class="footer-default">
            <div class="row gap-3 ms-5 me-5 mt-3">

            <div class="col-12 col-md-3 mb-3" title="Band Members">
                    <u class="pb-2 d-block small-text-header">©Haugaland Party Band 2026</u>
                    <p class="small-text mb-1">Jon Oma Dahle</p>
                    <p class="small-text mb-1">Aage Halleland</p>
                    <p class="small-text mb-1">Mikkel Westye Magnerud</p>
                    <p class="small-text mb-1">Andreas Jøsendal Helgeland</p>
                    <p class="small-text mb-1">Benjamin Hole</p>
                </div>

                <div class="col-12 col-md-3 mb-3" title="Contact">
                    <u class="pb-2 d-block small-text-header">Contact</u>
                    <button class="small-text btn btn-sm c-default" @click="copyPhone"
                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip"
                        data-bs-title="Click to Copy">
                        <i class="bi bi-telephone me-1 c-default"></i><span class="c-default">+47 406 14 867</span>
                    </button>
                    <button class="small-text btn btn-sm c-default" @click="copyEmail"
                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Click to Copy">
                        <i class="bi bi-mailbox me-1 c-default"></i><span class="c-default">Asbjorn.helgeland@gmail.com</span>
                    </button>
                </div>

                <div class="col-12 col-md-3 mb-3" title="Something Else">
                    <u class="pb-2 d-block small-text-header">Something Else</u>
                </div>

                <!-- <div class="col-12 col-md-3" title="Something Else">
                    <u class="pb-2 d-block small-text-header">Something Else</u>
                </div> -->

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
        alert(`Phone number copied to clipboard!`);
    }

    const copyEmail = (e: MouseEvent) => {;
        const target = e.target as HTMLElement;
        const email : string = target.innerText;
        navigator.clipboard.writeText(email);
        alert(`Email address copied to clipboard!`);
    }

</script>

<style scoped>
    .footer-default {
        width: 100%;
        height: 100%;
        background-color: #16181f;
        border-top: 1px solid #101117;
    }

    .small-text {
        font-size: 0.8rem;
    }

    .small-text-header {
        font-size: 1rem;
        font-weight: bold;
    }

    .custom-tooltip {
        --bs-tooltip-bg: #16181f;
        --bs-tooltip-color: #F2EFEA;
    }
</style>