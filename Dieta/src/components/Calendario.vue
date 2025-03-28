<script setup>
import Dia from "@/components/Dia.vue";
import { useCalendario } from '@/stores/Calendario'

const store = useCalendario()
</script>

<template>
    <div class="row justify-content-center mt-5">
        <div id="semana" class="card-group col-10">
            <Dia v-for="dia in store.calendario" :key="dia.fecha" :dia="dia">

            </Dia>
        </div>
    </div>
</template>

<style scoped>

</style>
