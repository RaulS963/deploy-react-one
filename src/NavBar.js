import React from 'react';

function NavBar(props){
    return(
        <div className="navbar">
            <ul>
                <li><a href="/" >Home</a></li>
                <li><a href="/erza" >erza</a></li>
                <li><a href="/mira" >mira</a></li>
                <li><a href="/minerva" >minerva</a></li>
            </ul>
        </div>
    );

}

export default NavBar;