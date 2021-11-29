<template>
    <h1 :class="styles">
        <slot />
    </h1>
</template>
<script lang="ts">
export default {
    name: 'Heroheader',
    props: {
        styles: {
            type: String,
            default: "font-hero text-black bg-white text-left uppercase text-6xl"
        },
    }
}
</script>