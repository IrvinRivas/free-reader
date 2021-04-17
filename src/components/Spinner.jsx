import React, { useEffect, useState } from 'react';
import spinner from '../img/spinner.gif'

const Spinner = (props) => {
    const [fatal, setFatal] = useState(false);
    const message = 'Error al conectar el servidor intentalo mas tarde o refresca la pagina';

    useEffect(()=> {
        setTimeout(() => {
            setFatal(true)
        },20000)
    },[])
    return (
        <>
        {fatal ?
            <h1 className="fatal">{props.message || message}</h1>
            :
            <img src={spinner} alt="cargando..." className="spinner"/>
        }
        </>
    )
}

export default Spinner
