import React from 'react';
import imgsrc from './imgs/mira.jpg';

function Mira(props){
    return(
        <div className="image-holder">
            <image>
                <img src={imgsrc}/>
            </image>
        </div>
    );
}

export default Mira;