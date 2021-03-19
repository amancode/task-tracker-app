import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';


//const Header = ({title}) => {  -- destructuring
const Header = (props) => {

    /*const ButtonHandler = () => {
        console.log('Button clicked');
    }*/

    const location = useLocation();
 
    return(
        <header className = "header">
            <h1>{props.title}</h1>
            {location.pathname === '/' && (<Button 
            color = {props.onAddTask ? 'red' : 'green'} 
            text = {props.onAddTask ? 'Close' : 'Add'}  
            clicked = {props.onAdd} serverDown = {props.serverDown} />)
            }
        </header>
    )
}

//Default props
Header.defaultProps = {
    title : "Task Tracker"
}

//Restrict Prop Types
Header.propTypes = {
    title : PropTypes.string.isRequired
}

//styling in camel Case or we can also put styling elements in jsx or custom tags. using {{}}
/* const styling = {
    color : 'blue',

} */

export default Header;