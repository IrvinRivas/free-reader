import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import '../styles/home.scss'
import Carrousel from '../components/Carrousel';
import Spinner from '../components/Spinner';

const Home = () => {
    const [mostReader, setMostReader] = useState([]);
    const [cine, setCine] = useState([]);
    const [history, setHistory] = useState([]);

    const getMostReader = () => {
        fetch(API+'?category=all&criteria=most_viewed&num_items=25')
            .then(response => response.json())
            .then(data => setMostReader(data))
    }

    const getCine = () => {
        fetch(API+'?category=cine&criteria=most_viewed&num_items=25')
            .then(response => response.json())
            .then(data => setCine(data))
    }

    const getHistory = () => {
        fetch(API+'?category=historia&criteria=most_viewed&num_items=25')
            .then(response => response.json())
            .then(data => setHistory(data))
    }

    useEffect(() => {
        getMostReader()
        getCine()
        getHistory()
    },[])
    return (
        <div id="home">
            <h1>Bienvenido a tu pagina de libros favorita</h1>
            {mostReader.length > 0 ? 
                <Carrousel title="Mas Polulares" data ={mostReader} />
                :
                <Spinner/>
            }
            {cine.length > 0 ?
                <Carrousel title="Cine" data={cine} />
                :
                <Spinner/>
            }
            {history.length > 0 ?
                <Carrousel title="Historia" data={history} />
                :
                <Spinner/>
            }
        </div>
    )
}

export default Home;
