import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import datos from '@/data/calendario.json';
import {getDate} from "date-fns";

export const useCalendario = defineStore('Comidas', () => {
    const calendario = ref(JSON.parse(localStorage.getItem('dias')) ?? datos);

    const numDias = computed(() => datos.value.length);
    const siguienteId = computed(() => datos.value.length + 1);

    function visualizarCalendario(){
        const fechaActual = new Date();

        console.log(fechaActual.getDate() + ' es el número del día de hoy.')

        let intervalo = new Date();
        intervalo.setDate(intervalo.getDate() - 10);

        console.log(intervalo.getDate() + ' hace 10 días')

        for (intervalo; fechaActual.getDate() > intervalo.getDate(); (intervalo.setDate(intervalo.getDate() + 1))){


            const anyo = intervalo.getFullYear().toString()
            const mes = (intervalo.getMonth() + 1).toString().padStart(2, '0')
            const dia = intervalo.getDate().toString().padStart(2, '0')


            const fechaFormateada = anyo.concat('-').concat(mes).concat('-').concat(dia)

            const undia = {
                "fecha": fechaFormateada,
                "anyo": anyo,
                "mes": mesAletras(mes),
                "dia": dia,
                "comidas": []
            }

            calendario.value.push(undia)
        }

    }

    function agregar(nuevaComida, fechaComida, anyo, mes, dia){

        //console.log(fechaComida);
        //console.log(nuevaComida);

        let encontrado = false;

        for (let i = 0; i < calendario.value.length; i++){
            //console.log(calendario.value[i].fecha);
            if (calendario.value[i].fecha === fechaComida){
                calendario.value[i].comidas.push(nuevaComida);
                encontrado = true;
            }
        }

        if (!encontrado){
            const nuevoDia = {
                "fecha": fechaComida,
                "anyo": anyo,
                "mes": mesAletras(mes),
                "dia": dia,
                "comidas": [nuevaComida]
            }
            //console.log(nuevoDia)
            calendario.value.push(nuevoDia)
        }

        localStorage.setItem('dias', JSON.stringify(calendario.value));
    }

    return { calendario, siguienteId, numDias, agregar, visualizarCalendario };
})

function mesAletras(mes){
    if (mes === "01") {
        mes = "Enero";
    } else if (mes === "02") {
        mes = "Febrero";
    } else if (mes === '03') {
        mes = "Marzo";
    } else if (mes === "04") {
        mes = "Abril";
    } else if (mes === "05") {
        mes = "Mayo";
    } else if (mes === "06") {
        mes = "Junio";
    } else if (mes === "07") {
        mes = "Julio";
    } else if (mes === "08") {
        mes = "Agosto";
    } else if (mes === "09") {
        mes = "Septiembre";
    } else if (mes === "10") {
        mes = "Octubre";
    } else if (mes === "11") {
        mes = "Noviembre";
    } else if (mes === "12") {
        mes = "Diciembre";
    } else {
        mes = "n/a";
    }
    return mes
}
