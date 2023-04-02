import React from 'react';
import { add, multiply } from '../Calculate';

const Shoes = () => {
    const first=10;
    const second=10;
    const total=multiply(first,second)
    const sum=add(first,second)
    return (
        <div>
            <h1>This is Shoes Component</h1>
            <p>total: {total}</p>
            <p>sum:{sum}</p>
        </div>
    );
};

export default Shoes;