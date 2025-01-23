import PropTypes from 'prop-types';
import personImage1 from './assets/boilermaker-pete.jpg'
import './CardOne.css'

const CardOne = ({ personName }) => (
    <div id="cardOneClass">
        <div ></div>
        <img src={personImage1} alt={personName} width="250px" height="250px"/>
            <h2>{personName}</h2>
    </div>
);

CardOne.propTypes = {
    personName: PropTypes.string,
}

export default CardOne;