<template>
    <div>
        <nuxt-link class="p-2 text-xl transition duration-400 hover:text-red-500" :to="to">
            <slot />
        </nuxt-link>
    </div>
</template>
<script>
export default {
    name: 'Navlink',
    props: {
        to: {
            type: String,
            default: '/',
        },
    }
}
</script>
<style>
.nuxt-link-exact-active {
    color: rgb(231, 13, 13);
}
</style>