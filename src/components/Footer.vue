<template>
    <footer class="footer-default c-default">
        <div class="row ms-5 me-3 footer-rows justify-content-between">

            <!-- <div class="col-12 col-md-3 mb-3 mt-3" title="Band Members">
                <p class="pb-1 d-block small-text-header">Medlemmer</p>
                <p class="small-text mb-1">Jon Oma Dahle</p>
                <p class="small-text mb-1">Aage Halleland</p>
                <p class="small-text mb-1">Mikkel Westye Magnerud</p>
                <p class="small-text mb-1">Andreas Jøsendal Helgeland</p>
                <p class="small-text mb-1">Benjamin Hole</p>
            </div> -->

            <div class="col-12 col-md-3 mb-3 mt-3">
                <p class="pb-1 d-block small-text-header funnyFont">Contact</p>
                <p class="small-text mb-1">Manager: Asbjørn Helgeland</p>
                <div class="flex-column d-flex">
                    <button class="small-text btn btn-sm text-start p-0 mb-1" @click="copyPhone" style="width: fit-content;" title="click to copy"> 
                        <span class="me-1 c-default">+47 406 14 867</span>
                    </button>
                    <button class="small-text btn btn-sm text-start p-0" @click="copyEmail" style="width: fit-content;" title="click to copy">
                        <span class="me-1 c-default">Asbjorn.helgeland@gmail.com</span>
                    </button>
                </div>
            </div>

            <div class="col-12 col-md-3 mb-3 mt-3">
                <p class="d-block small-text-header funnyFont">Links</p>
                <button class="btn btn-lg p-2" @click="link(1)">
                    <i class="bi bi-facebook c-default"></i>
                </button>
                <button class="btn btn-lg p-2" @click="link(2)">
                    <i class="bi bi-instagram c-default"></i>
                </button>
                <button class="btn btn-lg p-2" @click="link(6)">
                    <i class="bi bi-spotify c-default"></i>
                </button>
                <button class="btn btn-lg p-2" @click="link(3)">
                    <i class="bi bi-github c-default"></i>
                </button>
                <br>
                <button class="btn btn-sm p-0 m-0 btn-link text-decoration-none hover-text-decoration-underline" @click="link(4)">
                    <p class="mb-0">Terms & Conditions</p>
                </button>
                <br>
                <button class="btn btn-sm p-0 m-0 btn-link text-decoration-none hover-text-decoration-underline" @click="link(5)">
                    <p class="mb-0">Privacy Policy</p>
                </button>
            </div>

            <div class="col-12 col-md-3 mb-3 mt-3" title="HPB">
                <p class="d-block small-text-header funnyFont">HPB</p>
                <p class="small-text mb-1">Developer: Benjamin Hole</p>
                <p class="small-text mb-1">All Rights Reserved</p>
                <a class="small-text link text-decoration-none hover-text-decoration-underline" href="/hjem">
                    <p class="mb-1">©HaugalandPartyBand.no 2026</p>
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
    const base = import.meta.env.BASE_URL;

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

    const link = (index: Number) => {
        if (index === 1) {
            window.open('https://www.facebook.com/HaugalandPartyband');
        } else if (index === 2) {
            window.open('https://www.instagram.com/haugalandpartyband/');
        } else if (index === 3) {
            window.open('https://github.com/Benjamineternity/haugalandpartyband');
        } else if (index === 4) {
            window.location.href = `${base}terms/`;
        } else if (index === 5) {
            window.location.href = `${base}privacypolicy/`;
        } else if (index === 6) {
            window.open('https://open.spotify.com/artist/5XtSUcaEZjOY67LI05oiPY');
        }
    }

</script>

<style scoped>

    .footer {
        position: relative;
        /* bottom: 0; */
        /* left: 0; */
        width: 100%;
        height: 300px;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background: rgb(28, 26, 22, 0.65);
        backdrop-filter: blur(10px);
    }

    .funnyFont {
        font-family: 'Comic Sans MS';
    }

    .footer-inner {
        font-size: 24px;
    }

    .footer-default {
        --bs-bg-opacity: 0.5;
        background-color: rgba(22, 24, 31, var(--bs-bg-opacity));
        z-index: 999;
    }

    .c-default {
        color: rgb(242, 239, 234);
    }

    .small-text {
        font-size: 0.7rem;
        width: fit-content;
    }

    .small-text-header {
        font-size: 0.8rem;
        font-weight: bold;
    }

    @media screen and (max-width: 800px) {
        .footer-default {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .footer-rows {
            flex: 1;
            flex-direction: column;
        }
    }

</style>