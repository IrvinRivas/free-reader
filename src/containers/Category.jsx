import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../components/Carrousel';
import Spinner from '../components/Spinner';
import API from '../utils/api';

const Category = () => {
    const { id } = useParams();
    const { name } = useParams();
    const [books, setBooks] = useState([])

    const getBooks = () => {
        fetch(`${API}?category_id=${id}&criteria=most_viewed&num_items=25`)
        .then(response => response.json())
        .then(data => setBooks(data))
    }

    useEffect(() => {
        if(books){
            setBooks([])
            getBooks()
        }else{
            getBooks()
        }
    },[name,id])

    return (
        <>
        {books.length > 0 ?
            <Carrousel title={name} data={books} />
            :
            <Spinner/>
        }
        </>
    )
}

export default Category
