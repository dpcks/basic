import React, { useState } from 'react';
import './AppXY.css';

/* 좌표를 이용함  */
export default function AppXY() {
    // const [x, setX] = useState(0);
    // const [y, setY] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
    return (
        <div
            className="container"
            onPointerMove={(e) => {
                console.log(e.clientX, e.clientY);
                // setX(e.clientX);
                // setY(e.clientY);
                // setPosition({ x: e.clientX, y: e.clientY });
                // 만약 수평으로만 이동이 가능하다면?
                // setPosition((prev) => ({ x: e.clientX, y: prev.y }));
                setPosition((prev) => ({ ...prev, x: e.clientX })); // 스프레드
            }}
        >
            <div className="pointer" style={{ transform: `translate(${position.x}px, ${position.y}px)` }} />
        </div>
    );
}
