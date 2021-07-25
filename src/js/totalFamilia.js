// se crea funcion en base al valor del array para generar el total de familiares

const totalMiebros = document.querySelector('#ftotal');

export const totalFamilia = (valor) => {
	const txtStrong = `(Familiares: ${valor} )`;

	const strong = document.createElement('div');
	strong.innerHTML = txtStrong;

	totalMiebros.appendChild(strong);

	return strong;
};
