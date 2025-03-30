<script setup>
import {useCalendario} from "@/stores/Calendario.js";
import {ref} from "vue";

const store = useCalendario()

function pasarHoja(){
    store.siguienteMes(store.fechaPivote)
}

</script>

<template>
    <nav class="row justify-content-center pt-5">
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary">Retroceder</button>
            <button type="button" class="btn btn-outline-primary">Nueva comida</button>
            <button type="button" class="btn btn-primary" @click="pasarHoja()">Avanzar</button>
        </div>
    </nav>
</template>

<style scoped>

</style>
