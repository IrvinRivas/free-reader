import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import API from '../utils/api';

import Spinner from '../components/Spinner';
import MetaItems from '../components/MetaItems';
import Carrousel from '../components/Carrousel';

import download from '../img/download.png'

import '../styles/book.scss'
import '../styles/items.scss';

const Book = () => {

    const { id } = useParams();
    const [book, setBook] = useState({})
    const [related, setRelated] = useState([])

    const getBook = () => {
        if (book) {
            setBook({})
            setRelated([])
        }
        fetch(API+'?id='+id)
            .then(response => response.json())
            .then(data => {
                setBook(data[0])
                fetch(API+`?any_tags=[${data[0].tags.map(tag => tag.nicename)}]`)
                    .then(response => response.json())
                    .then(data => setRelated(data))
            })
    }

    useEffect(() => {
        getBook()
    },[id])

    return (
        <>
        { Object.keys(book).length > 0 && related.length > 0 ?
            <div className="book-container">
                <h1>{book.title}</h1>
                <Link to={"/author/"+book.author}>
                    <h3 className="item-links">{book.author}</h3>
                </Link>
                <p>
                    <strong>Editorial: </strong>
                    <Link to={"/editorial/"+book.publisher}>{book.publisher}</Link>
                </p>
                <div className="books-meta">
                    <h5>Categorias</h5>
                    <div className="meta-data__container">
                        <MetaItems data={book.categories} tags={false}/>
                    </div>
                    <h5>Tags</h5>
                    <div className="meta-data__container">
                        <MetaItems data={book.tags} tags={true} />
                    </div>
                </div>
                <div className="book-hero">
                    <img className="book-hero__img" src={book.cover} alt={book.title}/>
                    <div className="book-hero__content">
                        <p>{book.content}</p>
                        <a href={book.url_download} target="_blank" rel="noreferrer" className="download-btn">
                            <p>Descargar</p>
                            <img src={download} className="book-download__img" alt="download"/>
                        </a>
                    </div>
                </div>
            </div>
            :
            <Spinner/>
        }
        {related.length > 0 ? 
            <Carrousel blockId={book.ID} data={related} title="Libros relacionados" />
            :
            <Spinner/>
        }
        </>
    )
}

export default Book
