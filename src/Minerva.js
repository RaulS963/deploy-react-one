import React from 'react';
import imgsrc from './imgs/minerva.jpg';

function Minerva(props){
    return(
        <div className="image-holder">
            <image>
                <img src={imgsrc}/>
            </image>
        </div>
    );
}

export default Minerva;