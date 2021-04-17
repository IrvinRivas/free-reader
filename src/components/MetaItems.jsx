import React from 'react';
import { Link } from 'react-router-dom'

const MetaItems = (props) => {
    return (
        <>
        {Array.isArray(props.data) ?
            props.data.map(item => (
                item.name.split('/',3).length > 1 ?
                    props.tags === true ?
                    <Link key={item.tag_id} className=' item-links' to={`/tag/${item.name.split('/',3)[0]}-${item.name.split('/',3)[1]}/${item.tag_id}`}>
                        {'#'+item.name}
                    </Link>
                    : 
                    <Link key={item.category_id} className='meta-data__item item-category' to={`/category/${item.name.split('/',3)[0]}-${item.name.split('/',3)[1]}/${item.category_id}`}>
                        {item.name}
                    </Link>
                :
                    props.tags === true ?
                    <Link key={item.tag_id} className=' item-links'  to={`/tag/${item.name}/${item.tag_id}`}>
                        {'#'+item.name}
                    </Link>
                    :
                    <Link key={item.category_id} className='meta-data__item item-category'  to={`/category/${item.name}/${item.category_id}`}>
                        {item.name}
                    </Link>
            ))
            :
            props.tags === true ?
                <Link className=' item-links'  to={`/tag/${props.data.name}/${props.data.tag_id}`}>
                    {'#'+props.data.name}
                </Link>
                :
                <Link className='meta-data__item item-category'  to={`/category/${props.data.name}/${props.data.category_id}`}>
                    {props.data.name}
                </Link>
        }
        </>
    )
}

export default MetaItems
