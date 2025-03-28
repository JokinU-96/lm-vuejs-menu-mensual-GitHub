<script setup>
defineProps({
    dia: Object,
})
</script>

<template>
    <div class="card col-3">
        <div class="card-header text-center">
            <small class="text-muted">{{ dia.fecha }}</small>
        </div>
        <div class="card-body">
            <h5 class="card-title text-center">{{ dia.fecha }}</h5>
            <ul class="list-group">
                <li class="list-group-item" v-for="comida in dia.comidas" :key="comida.comidaId">{{comida.nombre}}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

</style>
