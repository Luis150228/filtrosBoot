import './styles.css';
import {Persona, ArbolFamiliar} from './classes';
import {addPariente, totalFamilia} from './js';

export const aitaiteki = new ArbolFamiliar();

const individuo = new Persona(
	'Fernando Rangel Mendoza',
	70,
	'CDMX',
	'Masculino',
	'Abuelo',
	'Gto'
);

const individuo2 = new Persona(
	'Derek Rangel Jimenez',
	4,
	'Celaya',
	'Masculino',
	'Hijo',
	'Gto'
);

aitaiteki.nuevoFamiliar(individuo);
aitaiteki.nuevoFamiliar(individuo2);

addPariente(individuo);
addPariente(individuo2);

console.log('ArbolFamiliar :', aitaiteki); ///Es el objeto con su array
// aitaiteki.familiaTotal(); //Total familiares
totalFamilia(aitaiteki.familiaTotal()); //// Se agrega la funcion que crea la etiqueta para mostrar el total de los familiares registrados
