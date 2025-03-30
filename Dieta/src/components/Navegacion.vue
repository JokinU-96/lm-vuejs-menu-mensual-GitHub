<script setup>
import {useCalendario} from "@/stores/Calendario.js";
import {ref} from "vue";

const store = useCalendario()

const fecha = new Date()

function siguienteMes(){
    //console.log(fecha.getDate())
    fecha.setDate(fecha.getDate() + 28)//7 * 4 = 28 dias o 4 semanas
    console.log(store.formatearFecha(fecha))
    store.visualizarCalendario(fecha)
}

</script>

<template>
    <nav class="row justify-content-center pt-5">
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary">Retroceder</button>
            <button type="button" class="btn btn-outline-primary">Nueva comida</button>
            <button type="button" class="btn btn-primary" @click="siguienteMes()">Avanzar</button>
        </div>
    </nav>
</template>

<style scoped>

</style>
