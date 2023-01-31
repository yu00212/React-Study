import React from 'react';
import { useEffect, useState } from 'react/cjs/react.production.min';
// {}で囲まれてる場合は、default exportではなく、exportされてる
import { ColorfulMessage } from './components/ColorfulMessage';

const App = () => {
    const [num, setNum] = useState(0);
    const [faceShowFlag, setFaceShowFlag] = useState(false);

    const onClickCountUp = () => {
        setNum(num + 1);
    };

    const onClickSwitchShowFlag = ()  => {
        setFaceShowFlag(!faceShowFlag);
    };

    // 第二引数に指定した値が変化した時だけ処理が実行される
    useEffect(() => {
        if (num > 0) {
            if (num % 3 === 0) {
                setFaceShowFlag || setFaceShowFlag(true);
            } else {
                setFaceShowFlag && setFaceShowFlag(false);
            }
        }
    }, [num]);

    return (
        <>
            <h1 style={{ color: 'red' }}>こんにちは</h1>
            <ColorfulMessage color="bule">お元気ですか？</ColorfulMessage>
            <ColorfulMessage color="pink">お元気です！</ColorfulMessage>
            <button onClick={onClickCountUp}>カウントアップ</button>
            <br />
            <button onClick={onClickSwitchShowFlag}>on/off</button>
            <p>{num}</p>
            {faceShowFlag && <p>（　'/'）</p>}
        </>
    );
};

export default App;