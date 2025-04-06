<script setup>
import {parseISO} from "date-fns";
import {useCalendario} from "@/stores/Calendario.js";
import Navegacion from "@/components/Navegacion.vue";
import {computed, ref} from "vue";

const store = useCalendario();

defineProps({
    dia: Object,
})

//console.log('Esta es la fecha de inicio para las card: ' + store.formatearFecha(store.calcularFechaIni(store.fechaPivote)))
//console.log('Esta es la fecha de final para las card: ' + store.formatearFecha(store.calcularFechaFin(store.fechaPivote)))


function esHoy(dia){
    const hoy = new Date()
    if (dia.fecha === store.formatearFecha(hoy)){
        return true
    }else{
        return false
    }
}
</script>

<template>
    <div :class="{'card col-2 px-0 mx-1 my-1' : true, 'd-none' : dia.ocultar}" style="width:13%;">
        <div :class="{'card-header text-center' : true, 'bg-dark' : esHoy(dia)}">
            <small :class="{'text-light' : esHoy(dia), 'text-muted' : !esHoy(dia)}">{{ dia.anyo }} {{ dia.mes }}</small>
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
