import {Persona} from './familia-class';

const keyFamStorage = 'keyParent';
export class ArbolFamiliar {
	constructor() {
		// this.individuos = [];
		this.setPariente();
	}

	nuevoFamiliar(Kazoku) {
		this.individuos.push(Kazoku);
		this.savePariente();
	}

	finadoFamiliar(id) {
		this.savePariente();
	}

	familiaTotal() {
		const filtroFamilia = this.individuos.filter((x) => x.vivo == true);
		const famNum = filtroFamilia.length;
		// console.log('Familiares: ', famNum);
		return famNum;
	}

	savePariente() {
		localStorage.setItem(keyFamStorage, JSON.stringify(this.individuos));
	}

	setPariente() {
		/*if (localStorage.getItem(keyFamStorage)) {
			///Validar si el localstorage esta vacio
			this.individuos = JSON.parse(localStorage.getItem(keyFamStorage)); ///Si no esta vacio crea el array con su contenido
			console.log(this.individuos);
		} else {
			this.individuos = []; //Si esta vacio crea un array sin contenido
		}*/

		this.individuos = localStorage.getItem(keyFamStorage)
			? JSON.parse(localStorage.getItem(keyFamStorage))
			: [];

		this.individuos = this.individuos.map((obj) => Persona.creadosJson(obj));
	}
}
