import { Link } from 'react-router-dom';
import '../styles/items.scss'

const CarrouselItem = (props) => {
    return (
        <Link to={"/book/"+props.id}>
            <div className="carrousel-item">
                <img src={props.cover} alt={props.title} className="carrousel-item__img" />
                <div className="carrousel-item__hero">
                    <h3>{props.title}</h3>
                    <div className="carrousel-item__data">
                        <h4>{props.author}</h4>
                        <p>{props.date}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CarrouselItem;
