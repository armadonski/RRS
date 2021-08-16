import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MiniGame from "./MiniGame/miniGame";

let ceil = Math.ceil;

Object.defineProperty(Array.prototype, 'chunk', {
    value: function (n) {
        return Array(ceil(this.length / n)).fill().map((_, i) => this.slice(i * n, i * n + n));
    }
});

ReactDOM.render(
    <React.StrictMode>
        <div>
            <MiniGame locale={locale}/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
