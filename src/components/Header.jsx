import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import '../styles/header.scss';

function Header() {

    const [input , setInput] = useState('');
    const history = useHistory(null);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInput(value)
    }

    const handleSearch = (e) => {
       e.preventDefault() 
        history.push('/search/'+input)
    }

    return (
        <header id="header">
            <Link to="/"><h1>Free Reader</h1></Link>
            <form className="header-form" onSubmit={handleSearch}>
                <input className="input header-input" onChange={handleInputChange} placeholder="Autor, libro, categoria" type="text"/>
                <input className="input header-btn" value="buscar" type="submit"/>
            </form>
        </header>
    )
}

export default Header
