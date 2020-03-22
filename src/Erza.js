import React from 'react';
import imgsrc from './imgs/erza.jpg';

function Erza(props){
    return(
        <div className="image-holder">
            <image>
                <img src={imgsrc}/>
            </image>
        </div>
    );
}

export default Erza;