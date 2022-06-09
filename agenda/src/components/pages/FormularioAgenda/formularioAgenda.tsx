import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { boolean } from 'yup';
import Contacto from '../../../models/contactoType';
import { getContactoXIdFecth, loadContacto, saveContacto } from './formularioAgendaApi';
//import { getContactoXIdFecth, saveContacto } from './FormularioAgendaApi';

export const FormularioAgenda = () => {
  
  // const [contactos, setContactos] = useState<Contacto[]>([]);
  // const [formData, setFormData] = useState<Contacto>(new Contacto());
  const [contacto, setContacto] = useState<Contacto>(new Contacto()); // | (()=> getContactoResto(contacto)))
  const navigate = useNavigate();
  const { id } = useParams();
  
  useEffect(() => {
    let booly: boolean = false;
    const fetchData = async () => {
      await traerContacto();
      booly = true;
    }
    booly?fetchData():console.log("a mimir")
  }, []) 

  // const preloadedValues = {contacto}
  // const { register, handleSubmit } = useForm({defaultValues: preloadedValues});

  const traerContacto = async () => {
    const loadedCont: Contacto = await loadContacto(id) as unknown as Contacto;
    await setContacto(loadedCont);
  }

  const save = async () => {
    console.log(contacto.nombre);
    await saveContacto(contacto);
    navigate('/agenda');
  }

  return (
    <>
      <div className="center">
        <Form className="form-control">
          <Form.Group className="mb-3" controlId="formBasicImagenPath">
            <Form.Label>Imagen</Form.Label>
            <Form.Control type="Text" value={contacto?contacto.fotourl:''} placeholder="Ingrese el path de la imagen" onChange={e => contacto.fotourl = String(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="Text" value={contacto?contacto.apellido:''} placeholder="Ingrese el apellido" onChange={e => contacto.apellido = String(e.target.value) } />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="Text" value={contacto?contacto.nombre:''} placeholder="Ingrese el nombre" onChange={e => contacto.nombre = String(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTelefono">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="Text" value={contacto?contacto.telefono:''} placeholder="Ingrese el Telefono" onChange={e => contacto.telefono = String(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="Text" value={contacto?contacto.email:''} placeholder="Ingrese el email" onChange={e => contacto.email = String(e.target.value)} />
          </Form.Group>
        
          <br />

          <br /><br />
          <Button onClick={save} variant="primary" type="button">
            Guardar
          </Button>
        </Form>
      </div>
    </>
  )}

  /* const getContactoResto = async (contacto: Contacto) => {
    console.log(contacto);
    let datos : Contacto[] = await getContactos();
    await setContactos(datos);
    
    if(contactos){
      contactos.map(async (cont) => {
        if(idcontacto && idcontacto == cont.id.toString()){
              await setContacto(cont);  
              console.log("Editing contacto ok");
              return contacto;
              
            } else {
              console.log("Creanding contacto ok");
              return contacto;
          }
      })
    }    
    } */

/*    
    setFormData({
      id: contacto.id,
      fotourl: contacto.fotourl,
      apellido: contacto.apellido,
      nombre: contacto.nombre,
      telefono: contacto.telefono,
      email: contacto.email
    });

*/
/////////////////////////////

    /*if (Number(idcontacto) !== 0) {
      let contactoSelect: Contacto = await getContactoXIdFecth(Number(idcontacto));
      setContacto(contactoSelect);
    } else {
      let contactoSelect: Contacto = new Contacto();
      setContacto(contactoSelect);
    }
  }*/
