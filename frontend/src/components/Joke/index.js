import React from 'react';

import './style.css';

class Joke extends React.Component {
    render() {
        return(
            <div className='joke-box'>
                <div>
                    In ancient Greece, Chuck Norris killed a man, screwed his wife, 
                    then set-up Oedipus to take the fall for it. Later, 
                    Oepidus fell in love with the widow and married her.
                </div>
            </div>
        );
    }
}

export default Joke;