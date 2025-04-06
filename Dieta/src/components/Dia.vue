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
    <div :class="{'card col-lg-1 px-0 mx-0 my-1' : true, 'd-none' : dia.ocultar}">
        <div :class="{'card-header text-center' : true, 'bg-dark' : esHoy(dia)}">
            <small :class="{'text-light' : esHoy(dia), 'text-muted' : !esHoy(dia)}">{{ dia.mes }}</small>
            <h5 :class="{'text-light' : esHoy(dia), 'text-muted' : !esHoy(dia)}">{{ dia.dia }}</h5>
        </div>
        <div class="card-body">
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
