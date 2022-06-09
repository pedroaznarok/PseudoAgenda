import './agendaContacto.css';
import { useEffect, useState } from 'react';
import { getContactos } from './agendaContactoApi';
import Contacto from '../../../models/contactoType';

function AgendaContacto() {


    const [contactos, setContactos] = useState<Contacto[]>([]);

    useEffect(() => {
        traerContactos();
    }, []);


    const traerContactos = async () => {
        let datos : Contacto[] = await getContactos();
        setContactos(datos);
    }

    const mostrarContactos = () => {
        if(contactos.length > 0) {
            return (
                <div className="grid-container-agenda">
                    <div className="grid-item-agenda">Foto</div>
	                <div className="grid-item-agenda">Apellido</div>
	                <div className="grid-item-agenda">Nombre</div>
	                <div className="grid-item-agenda">Telefono</div>
	                <div className="grid-item-agenda">Email</div>
                    {
                        contactos.filter(contacto => {
                            if(contacto.apellido){
                                return contacto.apellido[0].toUpperCase() === 'A';
                            }
                            return false;
                        }).map(contacto => {
                            return(
                                <>
                                    <div className='grid-item'><img src={contacto.fotourl}/></div>
                                    <div className='grid-item'>{contacto.apellido}</div>
                                    <div className='grid-item'>{contacto.nombre}</div>
                                    <div className='grid-item'>{contacto.telefono}</div>
                                    <div className='grid-item'>{contacto.email}</div>
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
        let data : Contacto[] = contactos.map(contacto => ({ ...contacto }));
        data = data.filter(contacto => {
            if(contacto.apellido){
                return contacto.apellido[0].toUpperCase() === letra;
            }
            return false;
        })
        setContactos(data);
    }
    
    const mostrarGrillaBusqueda = () => {
        return (
            <div className="grid-container">
            	<div className="grid-item"><button onClick={() => filtrarContactos('A')}>A</button></div>
            	<div className="grid-item"><button onClick={() => filtrarContactos('B')}>B</button></div>
            	<div className="grid-item"><button onClick={() => filtrarContactos('C')}>C</button></div>  
            	<div className="grid-item"><button onClick={() => filtrarContactos('D')}>D</button></div>
            	<div className="grid-item"><button onClick={() => filtrarContactos('E')}>E</button></div>
            	<div className="grid-item"><button onClick={() => filtrarContactos('F')}>F</button></div>  
            	<div className="grid-item"><button onClick={() => filtrarContactos('G')}>G</button></div>
            	<div className="grid-item"><button onClick={() => filtrarContactos('H')}>H</button></div>
            	<div className="grid-item"><button onClick={() => filtrarContactos('I')}>I</button></div> 
            	<div className="grid-item"><button onClick={() => filtrarContactos('J')}>J</button></div>  
            	<div className="grid-item"><button onClick={() => filtrarContactos('K')}>K</button></div> 
            	<div className="grid-item"><button onClick={() => filtrarContactos('L')}>L</button></div> 
            	<div className="grid-item"><button onClick={() => filtrarContactos('M')}>M</button></div> 
            	<div className="grid-item"><button onClick={() => filtrarContactos('N')}>N</button></div> 
            	<div className="grid-item"><button onClick={() => filtrarContactos('Ñ')}>Ñ</button></div> 
            	<div className="grid-item"><button onClick={() => filtrarContactos('O')}>O</button></div> 
            	<div className="grid-item"><button onClick={() => filtrarContactos('P')}>P</button></div> 
            	<div className="grid-item"><button onClick={() => filtrarContactos('Q')}>Q</button></div> 
            	<div className="grid-item"><button onClick={() => filtrarContactos('R')}>R</button></div> 
            	<div className="grid-item"><button onClick={() => filtrarContactos('S')}>S</button></div> 
            	<div className="grid-item"><button onClick={() => filtrarContactos('T')}>T</button></div> 
            	<div className="grid-item"><button onClick={() => filtrarContactos('U')}>U</button></div> 
            	<div className="grid-item"><button onClick={() => filtrarContactos('V')}>V</button></div> 
            	<div className="grid-item"><button onClick={() => filtrarContactos('W')}>W</button></div> 
            	<div className="grid-item"><button onClick={() => filtrarContactos('X')}>X</button></div> 
            	<div className="grid-item"><button onClick={() => filtrarContactos('Y')}>Y</button></div> 
            	<div className="grid-item"><button onClick={() => filtrarContactos('Z')}>Z</button></div>  
            </div>
        )
    }
    return (
        <>
            <h1>Agenda de Contactos</h1>
            {mostrarContactos()}
            <h3>Busqueda por Indice</h3>
            {mostrarGrillaBusqueda()}
        </>
    );
}

export default AgendaContacto;