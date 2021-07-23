import './styles.css';
import {Persona, ArbolFamiliar} from './classes';

const aitaiteki = new ArbolFamiliar();

const individuo = new Persona(
	'Fernando Rangel Mendoza',
	70,
	'CDMX',
	'Masculino',
	'Abuelo',
	'Gto'
);

aitaiteki.nuevoFamiliar(individuo);

console.log(aitaiteki);
