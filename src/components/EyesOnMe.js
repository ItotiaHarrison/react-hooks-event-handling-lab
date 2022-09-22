// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
    function handleClick(event) {
        if (event===focus) {
            console.log('Good!')
        }
        if (event===blur) {
            console.log('Hey! Eyes on me!')
        }
    }
        return (
            <div>
                <button onClick={handleClick(blur)}>Eyes on me</button>
            </div>
        );

    
}


export default EyesOnMe;
