import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import datos from '@/data/calendario.json';

export const useCalendario = defineStore('Comidas', () => {
    const calendario = ref(JSON.parse(localStorage.getItem('dias')) ?? datos);

    const numDias = computed(() => datos.value.length);
    const siguienteId = computed(() => datos.value.length + 1);

    function agregar(nuevaComida, fechaComida){

        console.log(fechaComida);
        console.log(nuevaComida);

        calendario.value.push(fechaComida);

        let d;
        for (d in calendario){
            if (fechaComida.value === d.fecha){
                calendario.value.comidas.push(nuevaComida);
            }
        }

        localStorage.setItem('dias', JSON.stringify(calendario.value));
    }

    return { calendario, siguienteId, numDias, agregar };
})
