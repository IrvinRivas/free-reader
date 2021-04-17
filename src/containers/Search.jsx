import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Carrousel from '../components/Carrousel';
import Spinner from '../components/Spinner';
import API from '../utils/api';

const Search = () => {
    const { search } = useParams();
    const [books, setBooks] = useState([])

    useEffect(() => {
        if (books.length > 0) {
            setBooks([])
        }
        fetch(`${API}?keyword=${search}&num_items=25`)
            .then(response => response.json())
            .then(data => setBooks(data))
    },[search])
    return (
        <>
            {books.length > 0 ?
                <Carrousel title={'Resultados de '+search} data={books} />
                :
                <Spinner message={'No hay resultados de tu busqueda'}/>
            }
        </>
    )
}

export default Search
