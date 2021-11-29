<template>
    <div class="flex flex-row-reverse container pb-16">
        <Navlink to="/contact">Contact</Navlink>
        <Navlink>Home</Navlink>
    </div>
</template>
<script>
import Navlink from "./Navlink.vue";
export default {
    components: { Navlink }
}
</script>