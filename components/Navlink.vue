<template>
    <div>
        <nuxt-link :class="styles" :to="to">{{ pageName }}</nuxt-link>
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
        pageName: {
            type: String,
            default: 'Home',
        },
        styles: {
            type: String,
            default: 'text-xl p-2'
        }
    }
}
</script>
<style>
.nuxt-link-exact-active {
    color: rgb(145, 145, 255);
}
</style>