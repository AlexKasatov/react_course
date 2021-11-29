import React from 'react';

const ItemAdmin = ({info}) => {
    return (
       <div>
           <h3>{info.name}</h3>
           <h3>{info.desc}</h3>
       </div>
    );
}

export default ItemAdmin;
