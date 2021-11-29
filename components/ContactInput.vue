<template>
    <div class="flex flex-col container align-center max-w-md mx-auto">
        <label class="py-2 w-max" :for="variant">
            <slot />
        </label>
        <input
            :id="variant"
            class="py-2 rounded-md bg-gray-200 transition duration-400 focus:bg-white hover:bg-white"
            type="text"
            :name="variant"
        />
    </div>
</template> 

<script lang="ts">
export default {
    name: 'ContactInput',
    props: {
        variant: {
            type: String,
            default: "name",
            validator(type: string) { return ['email', 'name'].includes(type) }
        },
    }
}
</script>
