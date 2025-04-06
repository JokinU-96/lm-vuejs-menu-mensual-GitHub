<script setup>
import {useCalendario} from "@/stores/Calendario.js";
import {ref} from "vue";

const store = useCalendario()

function pasarHoja(adelante){
    if(adelante){
        store.siguienteMes(store.fechaPivote)
    }else{
        store.anteriorMes(store.fechaPivote)
    }
}

</script>

<template>
    <nav class="row justify-content-center pt-5 d-none d-md-block">
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary" @click="pasarHoja(false)">Retroceder</button>
            <button type="button" class="btn btn-outline-primary">Nueva comida</button>
            <button type="button" class="btn btn-primary" @click="pasarHoja(true)">Avanzar</button>
        </div>
    </nav>
</template>

<style scoped>

</style>
