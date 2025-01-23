import './Header.css';
import PropTypes from "prop-types";

const Header = ({headingTitle}) => {
    return (

        <div>
            <h1>{headingTitle}</h1>
        </div>
    );
};

Header.propTypes = {
    headingTitle: PropTypes.string,
}

export default Header;