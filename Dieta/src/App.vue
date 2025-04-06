<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Calendario from "@/components/Calendario.vue";
import Navegacion from "@/components/Navegacion.vue";
import NuevaComida from "@/components/nuevaComida.vue";
import Dia from "@/components/Dia.vue";
</script>

<template class="container">
    <header class="container">
        <Navegacion />
        <NuevaComida/>
    </header>
    <div class="container">
        <Calendario/>
    </div>

</template>

<style scoped>

</style>
