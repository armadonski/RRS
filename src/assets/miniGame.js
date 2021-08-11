import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MiniGame from "./MiniGame/miniGame";

ReactDOM.render(
    <React.StrictMode>
        <div>
            <MiniGame locale={locale}/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
