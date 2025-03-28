<script setup>
defineProps({
    fecha: String,
})
import { useComidas } from "../hooks/useComidas";
import Comida from "../components/Comida.vue";
</script>

<template>
    <div class="card col-3">
        <div class="card-header text-center">
            <small class="text-muted" alt="el año y mes">{{ fecha }}</small>
        </div>
        <div class="card-body">
            <h5 class="card-title text-center" alt="el número del día">{{ fecha }}</h5>
            <ul class="list-group">
                <Comida class="list-group-item" v-for="comida in store." :key="comida."></Comida>

                <li class="list-group-item"><small class="text-muted">Segundo:</small></li>
                <li class="list-group-item"><small class="text-muted">Postre:</small></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

</style>
