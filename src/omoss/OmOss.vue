<template class="customBackground">
    <NavBar />
    <ImageBackground bg="empty2" />
    <!-- <div class="bg-default container"> -->
        <!-- <img /> -->
    <!-- </div> -->
    <Panel>
        <template #content1>
            <div class="bandItem">
                <p>Jon Oma Dahle - Vokal</p>
                <div class="imgWrapper">
                    <img class="bandImage" src="/src/omoss/images/jon.jpg" width="300" height="250" />
                </div>
            </div>

            <div class="bandItem">
                <p>Aage Halleland - Trommer & Kor</p>
                <div class="imgWrapper">
                    <img class="bandImage" src="/src/omoss/images/aage.jpg" width="300" height="250" />
                </div>
            </div>

            <div class="bandItem">
                <p>Andreas Jøsendal Helgeland - Tangenter</p>
                <div class="imgWrapper">
                    <img class="bandImage" src="/src/omoss/images/andreas.jpg" width="300" height="250" />
                </div>
            </div>

            <div class="bandItem">
                <p>Mikkel Westye Magnerud - Bass</p>
                <div class="imgWrapper">
                    <img class="bandImage" src="/src/omoss/images/mikkel.jpg" width="300" height="250" />
                </div>
            </div>

            <div class="bandItem">
                <p>Benjamin Hole - Gitar</p>
                <div class="imgWrapper">
                    <img class="bandImage" src="/src/omoss/images/benjamin.jpg" width="300" height="250" />
                </div>
            </div>
            <p style="justify-content: start; align-items:start; left: 0; font-size:0.6rem;color:rgb(242, 239, 234)">Bilder av Jakob Tønnesen</p>
        </template>
    </Panel>
    <Footer />
</template>

<script setup>
    import { ref } from 'vue';

    import NavBar from '/src/components/NavBar.vue';
    import ImageBackground from '/src/components/ImageBackground.vue';
    import Panel from '/src/components/Panel.vue';
    import Footer from '/src/components/Footer.vue';

</script>

<style scoped>
    .bg-default {
        --bs-bg-opacity: 0.5;
        background-color: rgba(22, 24, 31, var(--bs-bg-opacity));
    }

    .imgWrapper {
        position: relative;
        display: inline-block;
    }

    .imgWrapper::after {
        content: "";
        position: absolute;
        inset: -40px; /* controls how far the gradient spreads */
        z-index: -1;

        background: radial-gradient(
            circle at center,
            rgba(22, 24, 31, 1) 0%,
            rgba(22, 24, 31, 0.9) 30%,
            rgba(35, 38, 50, 0.7) 55%,
            rgba(60, 64, 85, 0.5) 75%,
            rgba(90, 95, 120, 0.3) 100%
        );

        filter: blur(20px);
        border-radius: 20px;
    }

    .c-default {
        color: rgb(242, 239, 234);
    }

    .funnyFont {
        font-family: 'Comic Sans MS';
    }

    .bandImage {
        object-fit: cover;
        object-position: center;
        zoom: 1.5;
        margin-bottom: 2rem;
    }

    .customBackground {
        background-color: #FFFF00;
    }

    @media screen and (max-width: 800px) {
        img {
            width: 230px;
            height: 170;
        }
    }

    @media screen and (max-width: 600px) {
        img {
            width: 200px;
            height: 150;
        }
    }

    @media screen and (max-width: 400px) {
        img {
            width: 150px;
            height: 120;
        }
    }

</style>