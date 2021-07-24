import {aitaiteki} from '..';
import {Persona, ArbolFamiliar} from '../classes';

//Referencias
// const divSeccion = document.querySelector('seccion');///querySelector es para clases
const divSeccion = document.querySelector('#seccion');
const personForm = document.querySelector('#person-form');
const nombre = document.querySelector('#projectinput1');
const origen = document.querySelector('#projectinput2');
const edad = document.querySelector('#projectinput3');
const genero = document.querySelector('#projectinput4');
const pariente = document.querySelector('#projectinput5');
const recidencia = document.querySelector('#projectinput6');
const vivo = document.querySelector('#projectinput7');

export const addPariente = (lapersona) => {
	const crearTarjeta = `
					<div class="col d-flex align-items-start">
						<svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em">
							<use xlink:href="#bootstrap" />
						</svg>
						<div person-id="${lapersona.id}">
							<h2 class="fw-bold mb-0">${lapersona.nombre}</h2>
							<h4 class="fw-bold mb-0">${lapersona.parentesco}</h4>
							<p>Nacio en: <strong>${lapersona.nac}</strong></p>
							<p>Radica en: <strong>${lapersona.ubicacion}</strong></p>
							<p>Edad: <strong>${lapersona.edad}</strong></p>
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" ${
									lapersona.vivo ? 'checked' : ''
								}/>
							Vive</label>
						</div>
					</div>
  `;

	const elem = document.createElement('div');
	elem.innerHTML = crearTarjeta;

	divSeccion.appendChild(elem);

	return elem;
};

personForm.addEventListener('submit', (e) => {
	e.preventDefault();
	if (nombre.value.length > 0 && edad.value > 0) {
		const addPersona = new Persona(
			nombre.value,
			edad.value,
			origen.value,
			genero.value,
			pariente.value,
			recidencia.value,
			vivo.value
		);

		aitaiteki.nuevoFamiliar(addPersona);
		addPariente(addPersona);

		nombre.value = '';
		edad.value = '';
		origen.value = '';
		genero.value = '';
		pariente.value = '';
		recidencia.value = '';
		vivo.value = '';
	}
});
