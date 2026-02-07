<template>
    <div class="c-default panel-default bg-default" style="padding: 1rem" :title="props.text">
        <slot />
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        text: {
            type: String,
            default: '',
        }
    });

</script>

<style scoped>

    .panel-default {
        width: 50%;
        left: 25%;
        right: 25%;
        height: fit-content;
        --bs-bg-opacity: 0.3;
        background-color: rgba(22, 24, 31, var(--bs-bg-opacity));
        z-index: 999;
        padding: 0;
    }
    
    .bg-default {
        background-color: rgba(22, 24, 31);
    }

    .c-default {
        color: rgb(242, 239, 234);
    }

</style>