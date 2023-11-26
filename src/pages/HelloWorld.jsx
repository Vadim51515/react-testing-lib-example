import React, { useState } from 'react';

const HelloWorld = () => {
    const [value, setValue] = useState('');
    const [isVisble, setIsVisble] = useState(false);

    const toggle = () => value === 'hello' && setIsVisble(prev => !prev)
    const onChange = (e) => setValue(e.target.value)

    return (
        <div>
            <input
                onChange={onChange}
                id='searchInput'
                type='text'
            />
            <button id='toggleBtn' onClick={toggle}>Toggle Btn</button>
            {isVisble && <h1 id='title'>Hello World</h1>}
        </div>
    );
};

export default HelloWorld;