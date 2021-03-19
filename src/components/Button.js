import PropTypes from 'prop-types';
import { MdDoNotDisturb } from "react-icons/md";

const Button = (props) => {
    return (!props.serverDown ? <button className = "btn" style = {{backgroundColor : props.color}} onClick = {props.clicked}>
              {props.text}
           </button> :
            <button className = "btn" style = {{backgroundColor : 'black'}} onClick = {props.clicked} title = "Disabled" disabled>
            <MdDoNotDisturb />
         </button>)
}

Button.defaultProps = {
    color : 'black',
    text : 'Something went wrong'
}

Button.propTypes = {
    color : PropTypes.string,
    text : PropTypes.string
}


export default Button;