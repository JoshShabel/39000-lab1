import PropTypes from 'prop-types';
import personImage3 from './assets/boilermaker-pete-3.jpg'
import './CardThree.css'

const CardThree = ({ personName }) => (
    <div id="cardThreeClass">
        <div ></div>
        <img src={personImage2} alt={personName} width="250px" height="250px"/>
            <h2>{personName}</h2>
    </div>
);

CardThree.propTypes = {
    personName: PropTypes.string,
}

export default CardThree;
