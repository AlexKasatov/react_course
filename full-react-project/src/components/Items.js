import React from 'react';

const Items = ({  info }) => {
    return (
        <div>
            <img src={info.image} alt="product"></img>
            <div>
                <h2>{info.name}</h2>
                <p>{info.desc}</p>
            </div>
        </div>
    );
}

export default Items;
