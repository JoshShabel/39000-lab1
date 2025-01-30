import PropTypes from 'prop-types';
import personImage2 from './assets/boilermaker-pete-2.jpg'
import styles from './Card.module.css'

const personName = 'Alex Cobbler';
const personJob = 'Teacher'

function CardTwo({ textFilter, job }) {
    if (personName.toLowerCase().includes(textFilter.toLowerCase()) && (job === personJob || job === "None Chosen")) {
        return (
            <div className={styles.cardTwoStyle}>
                <div></div>
                <img src={personImage2} alt={textFilter} width="250px" height="250px"/>
                <h2>{personName}</h2>
                <h3>{personJob}</h3>
            </div>
        )
    } else {
        return null;
    }
}

CardTwo.propTypes = {
    textFilter: PropTypes.string,
    personName: PropTypes.string,
    job: PropTypes.string,
    personJob: PropTypes.string,
}

export default CardTwo;
