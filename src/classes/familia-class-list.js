export class ArbolFamiliar {
	constructor() {
		this.individuos = [];
	}

	nuevoFamiliar(Kazoku) {
		this.individuos.push(Kazoku);
	}

	finadoFamiliar(id) {}

	familiaTotal() {
		const filtroFamilia = this.individuos.filter((x) => x.vivo == true);
		const famNum = filtroFamilia.length;
		console.log('Familiares: ', famNum);
	}
}
