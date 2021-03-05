import React from 'react';

import './style.css';

class Button extends React.Component {
    render() {
        return(
            <button className='button'>
                Get a new random fact!
            </button>
        )
    }
}

export default Button;