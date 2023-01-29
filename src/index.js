import React from 'react';
import ReactDom from 'react-dom';

// ReactはJSの中でhtmlタグを書いてreturnするJSX記法
const App = () => {
    return (
        // Fragment：余計な要素（div）がレンダリングされない
        // Reactは一つのタグで囲んであげないとエラーが出る。
        <React.Fragment>
            <h1>こんにちは</h1>
            <p>お元気ですか？</p>
        </React.Fragment>
    ); 
};

ReactDom.render(<App />, document.getElementById("root"));

