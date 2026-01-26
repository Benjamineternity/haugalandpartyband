<template>
    <div class="container text-center mt-5 text-primary mt-2 mx-auto" style="margin-left: 20%; margin-right: 20%">

        <navbar class="navbar">
            <div class="nav-item" href="#">
                <img src="/src/images/logo.png" style="width: 150px; height: 150px; border-radius: 0;"/>
            </div>
            <div class="nav-item" href="#">
                <h5>Haugaland Party Band</h5> <!-- maybe maybe, cos of the logo anyway -->
            </div>
            <div class="nav-item" href="calendar">
                <h5>Calendar</h5>
            </div>
            <div class="nav-item" href="gallery">
                <h5>Gallery</h5>
            </div>
            <div class="nav-item" href="reviews">
                <h5>Reviews</h5>
            </div>
        </navbar>

        <Panel><!--Main Page-->
            Selling points / features and what to expect, basically a sales pitch<br />
            Band member bios / pictures <br />
            Music samples / videos <br />
            Testimonials / reviews <br />
        </Panel>

        <Panel>
            dull white background pictures gliding past in the background, with a narrow line of text<br />
            info in the middle scolling like the apple website??<br />
        </Panel>

        <Panel>
            footer with contact info / social media links <br />
            copyright info ?? <br />
            developer credit ?? <br />
            thanks to .... <br />
        </Panel>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';

    import Panel from './components/Panel.vue';
    
    const url = ref(window.location.href);
    // url / Navbar will works as tabs or smt

    
    



</script>
