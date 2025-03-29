<script setup>
defineProps({
    dia: Object,
})

</script>

<template>
    <div class="card col-2 px-0">
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

</style>
