import './styles.css';
import {Persona, ArbolFamiliar} from './classes';
import {addPariente, totalFamilia, totalMiembros} from './js';

export const aitaiteki = new ArbolFamiliar();

/*const individuo = new Persona(
	'Fernando Rangel Mendoza',
	70,
	'CDMX',
	'Masculino',
	'Abuelo',
	'Gto'
);*/

// aitaiteki.nuevoFamiliar(individuo);

// addPariente(individuo);

// console.log('ArbolFamiliar :', aitaiteki); ///Es el objeto con su array
// aitaiteki.familiaTotal(); //Total familiares

// aitaiteki.nuevoFamiliar.forEach((delStorage) => addPariente(delStorage));

// totalFamilia(aitaiteki.familiaTotal()); //// Se agrega la funcion que crea la etiqueta para mostrar el total de los familiares registrados

totalMiembros(); ///Sirve para que cuando cargue la pagina ya tengamos el total de los familiares

aitaiteki.individuos.forEach((delStorage) => addPariente(delStorage)); //Crea tarjetas con el contenido del storage

// console.log(aitaiteki.individuos, totalMiembros());
