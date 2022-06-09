
import { useEffect, useState } from 'react';
import { deleteContacto, getContactos } from './tablaAgendaApi';
import Contacto from '../../../models/contactoType';
import { Button } from 'react-bootstrap';
import { FormularioAgenda } from '../FormularioAgenda/formularioAgenda';
import { useNavigate } from 'react-router-dom';

function TablaAgenda() {

    const [contacto, setContacto] = useState<Contacto>(new Contacto());
    const [contactos, setContactos] = useState<Contacto[]>([]);

    const navigate = useNavigate();
    
    useEffect(() => {
        traerContactos();
    }, []);


    const traerContactos = async () => {
        let datos: Contacto[] = await getContactos();
        setContactos(datos);
    }

    const mostrarContactos = () => {
        if (contactos.length > 0) {
            return (
                <div className="grid-container-agenda-botones">
                    <div className="grid-item-agenda">Foto</div>
                    <div className="grid-item-agenda">Apellido</div>
                    <div className="grid-item-agenda">Nombre</div>
                    <div className="grid-item-agenda">Telefono</div>
                    <div className="grid-item-agenda">Email</div>
                    <div className="grid-item-agenda">Editar</div>
                    <div className="grid-item-agenda">Eliminar</div>
                    {
                        contactos.map(contacto => {
                            return (
                                <>
                                    <div className='grid-item'><img alt="" src={contacto.fotourl} /></div>
                                    <div className='grid-item'>{contacto.apellido}</div>
                                    <div className='grid-item'>{contacto.nombre}</div>
                                    <div className='grid-item'>{contacto.telefono}</div>
                                    <div className='grid-item'>{contacto.email}</div>
                                    <div className='grid-item'>
                                        <Button variant="primary"onClick={() => navigate(`/formulario/${contacto.id}`)}>Modificar</Button></div>
                                    <div className='grid-item'>
                                        <Button variant="danger" onClick={() => deleteContacto(contacto.id)}>Baja</Button></div>

                                </>
                            )
                        })
                    }

                </div>
            )

        } else {
            return (
                <h4>Cargando Contactos</h4>
            )
        }
    }


    const filtrarContactos = (letra: string) => {
        let data: Contacto[] = contactos.map(contacto => ({ ...contacto }));
        data = data.filter(contacto => {
            if (contacto.apellido) {
                return contacto.apellido[0].toUpperCase() === letra;
            }
            return false;
        })
        setContactos(data);
    }

    return (

        <>
            <h1>Agenda de Contactos</h1>
            {mostrarContactos()}
        </>
    );
}

export default TablaAgenda;