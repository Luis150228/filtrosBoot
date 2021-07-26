import {aitaiteki} from '..';
import {ArbolFamiliar} from '../classes';

export const totalMiembros = () => {
	const a = aitaiteki.familiaTotal();
	const totalFamilia = (valor) => {
		const txtStrong = `(Familiares: ${valor} )`;

		// const strong = document.createElement('div');
		const strong = document.querySelector('#ftotal');

		// console.log(txtStrong);

		return (strong.innerHTML = txtStrong);

		// strongMiembros.append(strong.firstChild);

		// return strong.firstChild;
	};

	return totalFamilia(a);
};
