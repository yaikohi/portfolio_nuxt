<template>
    <div class="flex flex-row-reverse container pb-16">
        <Navlink />
        <Navlink to="/contact" page-name="Contact" />
    </div>
</template>
<script>
import Navlink from "./Navlink.vue";
export default {
    components: { Navlink }
}
</script>