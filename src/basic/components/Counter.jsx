import React, { useState } from 'react';

export default function Counter({ total, onClick }) {
    const [count, setCount] = useState(0); // 상태값을 접근할 수 있는 변수, 그걸 업데이트할 수 있는 함수
    return (
        <div className="counter">
            <p className="number">
                {count} <span className="total">/{total}</span>
            </p>
            <button
                className="button"
                onClick={() => {
                    setCount((prev) => prev + 1); // 콜백 함수 형태
                    onClick();
                }}
            >
                Add +
            </button>
        </div>
    );
}
