import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import Carrousel from '../components/Carrousel';
import Spinner from '../components/Spinner';
import API from '../utils/api';

const Author = () => {

    const { author } = useParams();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`${API}?book_author=${author}&num_items=25`)
            .then(response => response.json())
            .then(data => setBooks(data))
    },[author])

    return (
        <>
            {books.length > 0 ?
                <Carrousel title={author} data={books} />
                :
                <Spinner/>
            }
            
        </>
    )
}

export default Author
