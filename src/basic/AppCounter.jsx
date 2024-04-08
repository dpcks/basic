import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

export default function AppCounter() {
    const [totalcount, setCount] = useState(0);
    const handleClick = () => setCount((prev) => prev + 1);
    return (
        <div className="container">
            <div className="banner">
                Total Count: {totalcount} {totalcount > 10 ? '🔥' : '❄️'}
            </div>
            <div className="counters">
                <Counter total={totalcount} onClick={handleClick} />
                <Counter total={totalcount} onClick={handleClick} />
            </div>
        </div>
    );
}
