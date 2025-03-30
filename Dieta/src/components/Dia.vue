<script setup>
import {parseISO} from "date-fns";
import {useCalendario} from "@/stores/Calendario.js";

const store = useCalendario();

defineProps({
    dia: Object,
})


const hoy = store.formatearFecha(new Date()).toString().replaceAll("-", "");

console.log(store.fechaInicioForm + ' Esta es la fecha de inicio');
console.log(store.fechaFinalForm + ' Esta es la fecha final');

</script>

<template>

    <div class="card col-2 px-0 mx-1 my-1" style="width:13%;" v-if="hoy === dia.fecha">
        <div class="card-header bg-dark text-center">
            <small class="text-light">{{ dia.anyo }} {{ dia.mes }}</small>
        </div>
        <div class="card-body">
            <h5 class="card-title text-center">{{ dia.dia }}</h5>
            <ul class="list-group">
                <li class="list-group-item" v-for="comida in dia.comidas" :key="comida.comidaId">{{comida.nombre}}</li>
            </ul>
        </div>
    </div>
    <div class="card col-2 px-0 mx-1 my-1 d-none" style="width:13%;" v-else-if="dia.fecha < store.fechaInicioForm || dia.fecha > store.fechaFinalForm">
        <div class="card-header text-center">
            <small class="text-muted">{{ dia.anyo }} {{ dia.mes }}</small>
        </div>
        <div class="card-body">
            <h5 class="card-title text-center">{{ dia.dia }}</h5>
            <ul class="list-group">
                <li class="list-group-item" v-for="comida in dia.comidas" :key="comida.comidaId">{{comida.nombre}}</li>
            </ul>
        </div>
    </div>
    <div class="card col-2 px-0 mx-1 my-1" style="width:13%;" v-else>
        <div class="card-header text-center">
            <small class="text-muted">{{ dia.anyo }} {{ dia.mes }}</small>
        </div>
        <div class="card-body">
            <h5 class="card-title text-center">{{ dia.dia }}</h5>
            <ul class="list-group">
                <li class="list-group-item" v-for="comida in dia.comidas" :key="comida.comidaId">{{comida.nombre}}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    li {
        font-size: smaller;
    }
</style>
