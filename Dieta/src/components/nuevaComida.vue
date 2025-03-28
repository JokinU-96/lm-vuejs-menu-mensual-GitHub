<script setup>

import {computed, ref} from "vue";
import {useComidas} from "@/stores/Comidas.js";
import orderModifiers from "@popperjs/core/lib/utils/orderModifiers.js";

const store = useComidas();

const fecha = ref('')
const nombre = ref('')
const orden = ref('')


const guardar = () => {
    const nuevaComida = {
        userId: 1, //Cada día podrá haber más de una comida, con un máximo de 5.
        comidaId: fecha + orden, //La intención que tengo es encadenar el index de cada comida con su fecha.
        nombre: nombre.value //Nombre del plato.
    }
}

const completado = computed(() => {
    return nombre.value.length > 0 && fecha.value.length > 0 && orden.value.length > 0;
});

const limpiable = computed(() => {
    return nombre.value.length > 0 || fecha.value.length > 0 && orden.value.length > 0;
});

function limpiar() {
    fecha.value = '';
    nombre.value = '';
    orden.value = 0;
}

</script>

<template>

    <form class="row gy-2 gx-3 align-items-center justify-content-center mt-5">
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput">Fecha</label>
            <input type="date" class="form-control" id="autoSizingInput" v-model="fecha" required>
        </div>
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInputGroup">Comida: </label>
            <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Bacalao" v-model="nombre" required>
        </div>
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingSelect">Preference</label>
            <select class="form-select" id="autoSizingSelect" v-model="orden" required>
                <option value="0" selected>Elige...</option>
                <option value="1">Desayuno</option>
                <option value="2">Almuerzo</option>
                <option value="3">Comida</option>
                <option value="4">Merienda</option>
                <option value="5">Cena</option>
            </select>
        </div>
        <div class="col-auto btn-group">
            <button type="submit" :disabled="!completado" @click="guardar()" class="btn btn-primary">Agregar</button>
            <button type="submit" :disabled="!limpiable" @click="limpiar()" class="btn btn-outline-dark">Cancelar</button>
        </div>
    </form>

</template>

<style scoped>

</style>
