import {defineStore} from 'pinia';
import {computed, ref} from 'vue';
import datos from '@/data/calendario.json';
import {format, getDate, setDate} from "date-fns";
import calendario from "@/components/Calendario.vue";

export const useCalendario = defineStore('Comidas', () => {
    const calendario = ref(JSON.parse(localStorage.getItem('dias')) ?? datos);

    var fechaInicioForm = '';
    var fechaFinalForm = '';

    function calcularFechaIni(fecha){
        let fechaInicio = new Date(fecha);
        fechaInicio.setDate(fecha.getDate() - fecha.getDate());
        fechaInicio.setDate(fechaInicio.getDate() + 3);

        //console.log('La fecha de inicio es: ' + formatearFecha(fechaInicio))
        return fechaInicio
    }

    function calcularFechaFin(fecha){
        let offset = 3 + 35 - fecha.getDate() //7 dias x 4 semanas = 35 dias por hoja del calendario
        let fechaFinal = new Date(fecha);
        fechaFinal.setDate(fechaFinal.getDate() + offset)

        //console.log('La fecha final es: ' + formatearFecha(fechaFinal))
        return fechaFinal
    }

    function visualizarCalendario(fecha) {

        console.log('La fecha pivote es: ' + formatearFecha(fecha));

        let i = new Date(calcularFechaIni(fecha))
        let end = new Date(calcularFechaFin(fecha))

        console.log('La fecha de inicio es: ' + formatearFecha(i))
        console.log('La fecha final es: ' + formatearFecha(end))

        for (i;
             end.getDate() >= i.getDate();
             i.setDate(i.getDate() + 1)
        ){
            console.log(formatearFecha(i));
            if (existeFecha(formatearFecha(i), calendario) || existeFecha(formatearFecha(i), calendario) === 0) {
                console.log(formatearFecha(i) + ' Esta fecha se almacenó previamente.')
            } else {
                calendario.value.push(anyadirDia(i));
            }
        }

        let offset = 3 + 35 - fecha.getDate()
        for (let i = 1; offset > i; i++) {
            fecha.setDate(fecha.getDate() + 1)
            if (!existeFecha(formatearFecha(fecha), calendario)) {
                calendario.value.push(anyadirDia(fecha))
            }
        }

        console.log(calendario.value.sort((a, b) => a.fecha - b.fecha));

        localStorage.setItem('dias', JSON.stringify(calendario.value));
    }

    function agregar(nuevaComida, fechaComida, anyo, mes, dia) {

        //console.log(fechaComida);
        //console.log(nuevaComida);

        if (existeFecha(fechaComida, calendario)) {
            calendario.value[existeFecha(fechaComida, calendario)].comidas.push(nuevaComida)
        } else {
            const nuevoDia = {
                "fecha": fechaComida,
                "anyo": anyo,
                "mes": mesAletras(mes),
                "dia": dia,
                "comidas": [nuevaComida]
            }
            console.log(nuevoDia)
            calendario.value.push(nuevoDia)
        }

        localStorage.setItem('dias', JSON.stringify(calendario.value));
    }

    function formatearFecha(fecha) {

        const anyo = fecha.getFullYear().toString()
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0')
        const dia = fecha.getDate().toString().padStart(2, '0')

        return anyo.concat(mes).concat(dia)
        //recibe una fecha en formato fecha y devuelve 20250325
    }

    function anyadirDia(nuevafecha) {

        const anyo = nuevafecha.getFullYear().toString()
        const mes = (nuevafecha.getMonth() + 1).toString().padStart(2, '0')
        const dia = nuevafecha.getDate().toString().padStart(2, '0')

        return {
            "fecha": formatearFecha(nuevafecha),
            "anyo": anyo,
            "mes": mesAletras(mes),
            "dia": dia,
            "comidas": []
        }
    }

    return {agregar, visualizarCalendario, formatearFecha, calcularFechaFin, calcularFechaIni, calendario};
})

function mesAletras(mes) {
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


function existeFecha(fechaPerdidaFormateada, calendario) {
    for (let i = 0; i < calendario.value.length; i++) {
        if (calendario.value[i].fecha === fechaPerdidaFormateada) {
            //console.log(fechaPerdidaFormateada)
            return i;
        }
    }
    return false;
}

function compararNumeros(a, b) {
    a - b;
}
