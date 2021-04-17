import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import Carrousel from '../components/Carrousel';
import Spinner from '../components/Spinner';
import API from '../utils/api';

const Editorial = () => {

    const { editorial } = useParams();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`${API}?publisher=${editorial}&num_items=25`)
            .then(response => response.json())
            .then(data => setBooks(data))
    },[editorial])

    return (
        <>
            {books.length > 0 ?
                <Carrousel title={editorial} data={books} />
                :
                <Spinner/>
            }
            
        </>
    )
}

export default Editorial
