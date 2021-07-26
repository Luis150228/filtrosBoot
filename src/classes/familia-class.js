export class Persona {
	static creadosJson({
		nombre,
		edad,
		nac,
		genero,
		parentesco,
		ubicacion,
		vivo,
		id,
		registro,
	}) {
		///recibe objeto Array y lo recrea en una instancia nueva con sus datos de origen
		const tempPersona = new Persona(nombre);
		tempPersona.edad = edad;
		tempPersona.nac = nac;
		tempPersona.genero = genero;
		tempPersona.parentesco = parentesco;
		tempPersona.ubicacion = ubicacion;
		tempPersona.vivo = vivo;
		tempPersona.id = id;
		tempPersona.registro = registro;

		return tempPersona;
	}

	constructor(nombre, edad, nac, genero, parentesco, ubicacion) {
		this.nombre = nombre;
		this.edad = edad;
		this.nac = nac;
		this.genero = genero;
		this.parentesco = parentesco;
		this.ubicacion = ubicacion;
		this.vivo = true;
		this.id = new Date().getTime();
		this.registro = new Date();
	}
}
