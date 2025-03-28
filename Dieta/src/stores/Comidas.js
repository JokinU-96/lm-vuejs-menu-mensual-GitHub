import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import datos from '@/data/comidas.json';

export const useComidas = defineStore('Comidas', () => {
    const comidas = ref(JSON.parse(localStorage.getItem('comidas')) ?? datos);

    const numComidas = computed(() => comidas.value.length);
    const siguienteId = computed(() => comidas.value.length + 1);

    function agregar(nuevaComida){
        comidas.value.push(nuevaComida);
        localStorage.setItem('comidas', JSON.stringify(comidas.value));
    }

    return { comidas, siguienteId, numComidas };
})
