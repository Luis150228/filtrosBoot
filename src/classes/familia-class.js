export class Persona {
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
