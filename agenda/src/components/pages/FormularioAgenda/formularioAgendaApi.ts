import Contacto from '../../../models/contactoType';
import { getContactos } from '../AgendaContacto/agendaContactoApi';

export async function getContactoXIdFecth(id:number){
	let urlServer = 'http://168.194.207.98:8081/api_contacto/get_contactos.php'+id;
	let response = await fetch(urlServer, {
		method: 'GET',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
        mode: 'cors'
	});
	return await response.json() as Contacto;
    
}

// export async function loadContacto(idcontacto: any) {
export const loadContacto = async (idcontacto: any) => {
    let datos : Contacto[] = await getContactos();
	let contact: Contacto;
	// idcontacto?console.log(idcontacto):console.log("no anda");
    
    if(datos && idcontacto){
		datos.map(async (cont) => {
			if(idcontacto && idcontacto == cont.id.toString()){
				contact = cont;
				return contact;
				
				/*console.log("Editing contacto ok");
				console.log("1:"+contact);
				*/
				// console.log("2:"+contact);
              
            } else {
            //   console.log("Creanding contacto ok");
			//   console.log("3:"+contact);
              return contact;
          }
      })
    }    
    }

export async function saveContacto(contacto?: Contacto) {
	let urlServer = 'http://168.194.207.98:8081/api_contacto/post_contacto.php';
	let method:string = "POST";
	if(contacto && contacto.id > 0){
		urlServer = 'http://localhhttp://168.194.207.98:8081/api_contacto/put_contacto.php';
		method = "PUT";
	}
	await fetch(urlServer, {
	  "method": method,
	  "body": JSON.stringify(contacto),
	  "headers": {
		"Content-Type": 'application/json'
	  }
	});
  }