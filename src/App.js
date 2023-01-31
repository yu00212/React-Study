import React from 'react';
import { useState } from 'react/cjs/react.production.min';
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
    const onClickCountUp = () => {
        setNum(num + 1);
    };
    const [num, setNum] = useState(0);
    return (
        <>
            <h1 style={{ color: 'red' }}>こんにちは</h1>
            <ColorfulMessage color="bule">お元気ですか？</ColorfulMessage>
            <ColorfulMessage color="pink">お元気です！</ColorfulMessage>
            <button onClick={onClickCountUp}>カウントアップ</button>
        </>
    );
};

export default App;