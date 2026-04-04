<template>
    <div class="" style="height: fit-content;"> <!--page-container-->
        <div class="content">
            <div class="c-default panel-default" :title="props.text" :style="atHome ? 'height: 80vh;' : ''">
                <div class="container fullContent gap-3 justify-content-center">
                    <div class="gap-2 container">
                        <div class="container fs-4 fw-bold text-center">
                            <slot name="header1"></slot>
                        </div>
                        <div class="container text-wrap text-break text-center">
                            <slot name="content1"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    
    const atHome = ref(true);

    const props = defineProps({
        text: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        }
    });

    onMounted(() => {
        atHome.value = window.location.href === 'https://haugalandpartyband.no/' || window.location.href === 'https://haugalandpartyband.no' || window.location.href === 'https://haugalandpartyband.no/hjem' || window.location.href === 'https://haugalandpartyband.no/hjem/' || window.location.href === 'http://localhost:5173/' || window.location.href === 'http://localhost:5173/hjem';
    });
</script>

<style scoped>
    .panel-default {
        align-items: center;
        width: 40%;
        margin-left: 30%;
        margin-right: 30%;
        height: fit-content;
        /* --bs-bg-opacity: 0.3; */
        /* Removed bg to have it as a placeholder thing pn empty, might add this to another component to exentuate text */
        /* background-color: rgba(22, 24, 31, var(--bs-bg-opacity)); */ 
        z-index: 999;
        padding: 0;
        height: fit-content;
        padding: 1rem;
    }

    .fullContent {
        margin-top: 15%;
    }

    .content {
        width: 100%;
    }

    .c-default {
        color: rgb(242, 239, 234);
    }

    .bg-default {
        --bs-bg-opacity: 0.5;
        background-color: rgba(22, 24, 31, var(--bs-bg-opacity));
    }

    @media screen and (max-width: 1000px) {
        .panel-default {
            width: 60%;
            margin-left: 20%;
            margin-right: 20%;
        }

        .fullContent {
            margin-top: 20%;
        }
    }

    @media screen and (max-width: 800px) {
        .panel-default {
            width: 80%;
            margin-left: 10%;
            margin-right: 10%;
        }

        .fullContent {
            margin-top: 20%;
        }
    }

    @media screen and (max-width: 600px) {
        .panel-default {
            width: 90%;
            margin-left: 5%;
            margin-right: 5%;
        }

        .fullContent {
            margin-top: 30%;
        }
    }

</style>