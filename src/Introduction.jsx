import './Introduction.css';
import PropTypes from "prop-types";

const Introduction = ({ introductionTitle, introductionDescription}) => {
    return (

        <div>
            <h2>{introductionTitle}</h2>
            <p>{introductionDescription}</p>
        </div>
    );
};

Introduction.propTypes = {
    introductionTitle: PropTypes.string,
    introductionDescription: PropTypes.string,
}

export default Introduction;