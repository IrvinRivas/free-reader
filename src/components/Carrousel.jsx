import React from 'react'
import CarrouselItem from './CarrouselItem';
import '../styles/carrousel.scss'

const Carrousel = (props) => {
    const { title } = props;
    const { data } = props;
    const { blockId } = props;

    const newData = data.filter(item => item.ID !== blockId)
    return (
        <div className="carrousel">
            <h2>{title}</h2>
            <div className="carrousel-content">
                {newData.map(item => (
                    <CarrouselItem 
                        id={item.ID}
                        key={item.ID}
                        title={item.title} 
                        cover={item.cover} 
                        author={item.author} 
                        date={item.publisher_date}
                        categories={item.categories}
                    />
                ))
                }
            </div>
        </div>
    )
}

export default Carrousel
