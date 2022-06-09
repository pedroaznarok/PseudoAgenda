import Contacto from "../../../models/contactoType";
import { saveContacto } from "../FormularioAgenda/formularioAgendaApi";



export async function getContactos() {
    let urlServer = 'http://168.194.207.98:8081/api_contacto/get_contactos.php';
	let response = await fetch(urlServer, {
		method: 'GET',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
        mode: 'cors'
	});
	return await response.json();
}

/* export async function editContacto(contacto: Contacto) {
  if(contacto){
	  saveContacto(contacto);
	  return console.log("OK")
  } */

	
	/* let urlServer = 'http://168.194.207.98:8081/api_contacto/put_contacto.php';
	let response = await fetch(urlServer, {
		method: 'PUT',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
        body: JSON.stringify({contacto}),
        mode: 'cors'
	});
	return await response.json();
}*/

export async function deleteContacto(id: number) {
    let urlServer = 'http://168.194.207.98:8081/api_contacto/delete_contacto.php?id=' + id;
	let response = await fetch(urlServer, {
		method: 'DELETE',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
        mode: 'cors'
	});
	return await response.json();
}