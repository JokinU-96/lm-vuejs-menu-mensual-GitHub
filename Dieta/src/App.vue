<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Calendario from "@/components/Calendario.vue";
import Navegacion from "@/components/Navegacion.vue";
</script>

<template>
    <header>
        <Navegacion />
    </header>

    <Calendario></Calendario>

</template>

<style scoped>

</style>
