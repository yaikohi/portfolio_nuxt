<template>
    <p class="font-light font-paragraph text-2xl">{{ content }}</p>
</template>

<script lang="ts">
export default {
    name: 'Paragraph',
    props: {
        content: { type: String, default: "Hello" },
    }
}
</script>