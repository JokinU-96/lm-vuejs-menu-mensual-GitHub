<script setup>
import Dia from "@/components/Dia.vue";
import { useCalendario } from '@/stores/Calendario'
import {ref} from "vue";

const store = useCalendario()

const fecha = new Date()

store.visualizarCalendario(fecha)

</script>

<template>
    <div class="row mt-5 justify-content-center">
        <Dia v-for="dia in store.calendario" :key="dia.fecha" :dia="dia"></Dia>
    </div>
</template>

<style scoped>

</style>
