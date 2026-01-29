<template>
    <div class="w-100 h-100 c-default" style="padding: 1rem" :title="props.text"> <!-- panel background and padding -->
        <slot />
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const props = defineProps({
        text: {
            type: String,
            default: '',
        }
    });

</script>