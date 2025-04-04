<script setup>
import {parseISO} from "date-fns";
import {useCalendario} from "@/stores/Calendario.js";
import Navegacion from "@/components/Navegacion.vue";

const store = useCalendario();

defineProps({
    dia: Object,
})

const hoy = store.formatearFecha(new Date()).toString().replaceAll("-", "");
//console.log('Esta es la fecha de inicio para las card: ' + store.formatearFecha(store.calcularFechaIni(store.fechaPivote)))
//console.log('Esta es la fecha de final para las card: ' + store.formatearFecha(store.calcularFechaFin(store.fechaPivote)))

function isActive(dia){
    if (dia.fecha < store.formatearFecha(store.calcularFechaIni(store.fechaPivote)) ||
        dia.fecha > store.formatearFecha(store.calcularFechaFin(store.fechaPivote))){
        console.log(dia.fecha.toString() + ' El día que proceso.');
        console.log(store.formatearFecha(store.calcularFechaIni(store.fechaPivote)) + ' La fecha de inicio para mostrar el día que proceso')
        console.log(store.formatearFecha(store.calcularFechaFin(store.fechaPivote)) + ' La fecha de fin para mostrar el día que proceso')
        return false;
    }else{

        console.log(dia.fecha.toString() + ' El día que proceso pero FALSE.');
        console.log(dia.fecha.toString());
        return true;
    }
}


</script>

<template>
    <div :class="{'card col-2 px-0 mx-1 my-1' : true, 'd-none' : isActive(dia)}" style="width:13%;">
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
