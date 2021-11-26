<template>
    <h1 :class="styles">{{ content }}</h1>
</template>
<script lang="ts">
export default {
    name: 'Heroheader',
    props: {
        styles: {
            type: String,
            default: "font-hero text-black bg-white text-left uppercase text-6xl p-4 m-4"
        },
        content: {
            type: String,
            default: "junior developer, \n student"
        }
    }
}
</script>