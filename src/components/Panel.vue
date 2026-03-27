<template>
    <div class="page-container">
        <div class="content">
            <div class="c-default panel-default" :title="props.text" :style="atHome ? 'height: 80vh;' : ''">
                <div class="container fullContent gap-3">
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
        atHome.value = window.location.hostname === 'haugalandpartyband.no' || window.location.hostname === 'www.haugalandpartyband.no' || window.location.hostname === 'localhost';
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
        height: 100vh;
        padding: 1rem;
    }

    .fullContent {
        margin-top: 20%;
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

</style>