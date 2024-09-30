import React from 'react';
import './CSS/index.css';
import './CSS/global.scss';
import User from './Components/Users';

interface AppProps { }

const App: React.FC<AppProps> = ({ }) => {
    return (
        <div>
            <h2>WebPack - React application</h2>
            <p>ENV: </p>
            <User />
        </div>
    )
}

export default App;