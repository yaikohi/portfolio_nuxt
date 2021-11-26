<template>
    <div>
        <input type="submit" :value="value" class="bg-blue-200 p-2 rounded-md" />
    </div>
</template>

<script lang="ts">
export default {
    name: "ContactFormButton",
    props: {
        value: {
            type: String,
            default: "Submit"
        }
    }
}
</script>