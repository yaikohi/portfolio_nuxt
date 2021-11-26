<template>
    <li>
        <slot />
    </li>
</template>
<script lang="ts">
export default {
    name: 'ListPoint',
    props: {
        content: {
            type: String,
            default: "Hi"
        }
    }
}
</script>