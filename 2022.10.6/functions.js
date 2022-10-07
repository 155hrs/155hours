import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(

);

export default function playlistInfo(){
    return(
        <div>
            <playlistNaming>
                year=""
            </playlistNaming>
        </div>
    )
}

function playlistNaming(props){
    return(
        <div>
            <p class="year">{props.year}</p>
            <h3 class="playlistname">{props.name}</h3>
            <p class="playlisttitle">{props.bio}</p>
        </div>
    )
}