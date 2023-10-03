import React, { useState } from 'react';
import Child from '../pure/Child';

const Father = () => {
    
    const [name, setName] = useState("Roger");

    function showMessage(text) {
        alert(`Message recivied: ${text}, hello father`)
    }

    function updateName(newName) {
        setName(newName);
    }
    return (
        <div style={{background:'tomato', padding: '10px'}}>
            <h1>Child Component</h1>
            <Child func={showMessage} name={"Roger"} update={updateName}/>
        </div>
    );
}

export default Father;
