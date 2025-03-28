<script setup>
import Dia from "@/components/Dia.vue";
import { useComidas } from "@/stores/Comidas.js";
</script>

<template>
    <div class="row justify-content-center mt-5">
        <div id="semana" class="card-group col-10">
            <Dia v-for="comida in store.comidas" :key="comida.comidaId" :nombre="comida.nombre" :fecha="comida.fecha" :orden="comida.orden"></Dia>/
        </div>
    </div>
</template>

<style scoped>

</style>
