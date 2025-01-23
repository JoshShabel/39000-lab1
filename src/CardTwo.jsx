import PropTypes from 'prop-types';
import personImage2 from './assets/boilermaker-pete-2.jpg'
import './CardTwo.css'

const CardTwo = ({ personName }) => (
    <div id="cardTwoClass">
        <div ></div>
        <img src={personImage2} alt={personName} width="250px" height="250px"/>
            <h2>{personName}</h2>
    </div>
);

CardTwo.propTypes = {
    personName: PropTypes.string,
}

export default CardTwo;
