import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Carrousel from '../components/Carrousel';
import Spinner from '../components/Spinner';
import '../styles/items.scss'
import API from '../utils/api';

const Tag = () => {
    const { id } = useParams();
    const { tag } = useParams();
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        fetch(API+`?any_tags=[${tag}]&num_items=25`)
            .then(response => response.json())
            .then(data => setBooks(data))

    },[id,tag])

    return (
        <div>
            <p className="item-tags">#{tag}</p>
            {books.length > 0 ?
                <Carrousel data={books}/>
                :
                <Spinner/>
            } 
        </div>
    )
}

export default Tag
