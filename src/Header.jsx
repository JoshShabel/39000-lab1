import './Header.css';
import PropTypes from "prop-types";

const Header = ({headingTitle}) => {
    return (

        <div>
            <h2>{headingTitle}</h2>
        </div>
    );
};

Header.propTypes = {
    headingTitle: PropTypes.string,
}

export default Header;