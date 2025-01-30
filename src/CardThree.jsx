import PropTypes from 'prop-types';
import personImage3 from './assets/boilermaker-pete-3.jpg'
import './CardThree.css'

const personName = 'John Smith';
const personJob = 'Builder'

function CardThree({ textFilter, job }) {
       if (personName.toLowerCase().includes(textFilter.toLowerCase()) && (job === personJob || job === "None Chosen")) {
            return (
                <div id="cardThreeClass">
                    <div></div>
                    <img src={personImage3} alt={textFilter} width="250px" height="250px"/>
                    <h2>{personName}</h2>
                    <h3>{personJob}</h3>
                </div>
            )
       } else {
            return null;
        }

}


CardThree.propTypes = {
    textFilter: PropTypes.string,
    personName: PropTypes.string,
    job: PropTypes.string,
    personJob: PropTypes.string,
}

export default CardThree;
