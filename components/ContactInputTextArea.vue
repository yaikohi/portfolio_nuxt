<template>
    <div class="flex flex-col container align-center max-w-md mx-auto">
        <label class="py-2" for="textarea">
            <slot />
        </label>
        <textarea
            id="textarea"
            class="py-2 rounded-md bg-gray-200 transition duration-400 hover:bg-white active:bg-white"
            rows="4"
            cols="40"
            type="text"
            name="textarea"
        />
    </div>
</template> 

<script lang="ts">
export default {
    name: 'ContactInputTextArea',
}
</script>
