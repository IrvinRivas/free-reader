import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/menu.scss'
import API from '../utils/api';
import Spinner from './Spinner';
import menuIcon from '../img/hamburger-menu.png'

const Menu = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(API+'?get_categories=all')
            .then(response => response.json())
            .then(data => setCategories(data))
    },[])

    const showMenu = () => {
        const menu = document.getElementById('menu');
        if (menu.style.display !== 'block') {
            menu.style.display = 'block'
        }else{
            menu.style.display = 'none';
        }       
    }


    return (
        <>
        <div id="menu">
            <h1>Categorias</h1>
            <ul>
                {categories.length > 0 ?
                    categories.map((category, i) => (
                        category.name.split('/',3).length > 1 ?
                        <Link key={'menu'+category.category_id} to={`/category/${category.name.split('/',3)[0]}-${category.name.split('/',3)[1]}/${category.category_id}`}>
                            <li>{category.name}</li>
                        </Link>
                        :
                        <Link key={'menu'+category.category_id} to={`/category/${category.name}/${category.category_id}`}>
                            <li>{category.name}</li>
                        </Link>
                    ))
                    :
                    <Spinner/>
                }
            </ul>
        </div>
        <div id="menu-icon">
            <img src={menuIcon} alt="menu" onClick={showMenu} className="menu-img" />
        </div>
        </>
    )
}

export default Menu
