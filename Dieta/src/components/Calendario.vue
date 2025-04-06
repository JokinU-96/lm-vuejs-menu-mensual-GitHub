<script setup>
import Dia from "@/components/Dia.vue";
import { useCalendario } from '@/stores/Calendario'
import {ref} from "vue";

const store = useCalendario()

//console.log(store.fechaPivote.toDateString())
let fecha = new Date()

store.visualizarCalendario(fecha)

</script>

<template>
    <h1 class="text-center display-1 text-secondary">{{ fecha.getUTCFullYear() }}</h1>
    <div class="row mt-5 justify-content-lg-start justify-content-center">
        <Dia v-for="dia in store.calendario" :key="dia.fecha" :dia="dia"></Dia>
    </div>
</template>

<style scoped>

</style>
