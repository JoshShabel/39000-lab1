import PropTypes from 'prop-types';
import personImage1 from './assets/boilermaker-pete.jpg'
import './CardOne.css'

const personName = 'Jane Doe';
const personJob = 'Engineer'

function CardOne({ textFilter, job }) {
    if (personName.toLowerCase().includes(textFilter.toLowerCase()) && (job === personJob || job === "None Chosen")) {
        return (
            <div id="cardOneClass">
                <div></div>
                <img src={personImage1} alt={textFilter} width="250px" height="250px"/>
                <h2>{personName}</h2>
                <h3>{personJob}</h3>
            </div>
        )
    } else {
        return null;
    }

}

CardOne.propTypes = {
    textFilter: PropTypes.string,
    personName: PropTypes.string,
    job: PropTypes.string,
    personJob: PropTypes.string,
}

export default CardOne;