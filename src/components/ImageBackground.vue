<template>
    <div class="bg-images">
        <img v-for="(img, idx) in twoImages" :key="idx"
            :src="img.source" loading="eager" class="image" :class="{ active: img.active }" />
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, onBeforeUnmount } from 'vue';

    const images = import.meta.glob<string>(
        '/src/images/*.jpg',
        { eager: true, import: 'default' }
    );

    // types => its just a type of object predefined i guess
    type ImageSlot = {
        source: string | undefined,
        active: boolean
    }

    // refs
    const showing = ref<1 | 0 >(0);
    const imgIndex = ref(0);
    const galleryImages = Object.values(images).filter((src): src is string => typeof src === 'string');
    const twoImages = ref<[ImageSlot, ImageSlot]>([
        { source: galleryImages[0], active: true },
        { source: galleryImages[1] ?? galleryImages[0], active: false }
    ]);

    onMounted(() => {
        nextNumber();
        startImg();
    });

    onBeforeUnmount(() => {
        pauseImg();
    });

    const nextNumber = () => {
        const nextIdx =(imgIndex.value + 1) % galleryImages.length

        const nextSlot = showing.value === 0 ? 1 : 0

        const current = twoImages.value[showing.value]
        const next = twoImages.value[nextSlot]

        next.source = galleryImages[nextIdx]

        current.active = false
        next.active = true

        showing.value = nextSlot
        imgIndex.value = nextIdx
    }

    let intervalId: number | undefined = undefined;

    const startImg = () => {
        if (intervalId) return
        intervalId = window.setInterval(nextNumber, 13200)
    }

    const pauseImg = () => {
        if (!intervalId) return
        clearInterval(intervalId)
        intervalId = undefined
    }

</script>

<style scoped>
    .bg-images {
        position: fixed;
        inset: 0;
        overflow: hidden;
        pointer-events: none;
        background-color: rgba(22, 24, 31);
    }

    .image {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        opacity: 0;
        transition: opacity 2s ease-in-out;
        will-change: opacity;
    }

    .image.active {
        opacity: 1;
    }

</style>
