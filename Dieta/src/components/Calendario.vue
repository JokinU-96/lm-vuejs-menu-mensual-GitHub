<script setup>
import Dia from "@/components/Dia.vue";
import { useCalendario } from '@/stores/Calendario'

const store = useCalendario()

store.visualizarCalendario()

</script>

<template>
    <div class="row mt-5">
        <Dia v-for="dia in store.calendario" :key="dia.fecha" :dia="dia"></Dia>
    </div>
</template>

<style scoped>

</style>
