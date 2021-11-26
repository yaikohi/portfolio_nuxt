<template>
    <div class="flex flex-col container align-center w-60">
        <label class="py-2 w-max" :for="variant">
            <slot />
        </label>
        <input :id="variant" class="py-2 rounded-md" type="text" :name="variant" />
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
        // values: {
        //     type: String,
        //     default: "John Doe",
        //     validator(type: string) {
        //         return ['john.doe@company.com', 'john doe'].includes(type)
        //     }
        // }
    }
}
</script>
