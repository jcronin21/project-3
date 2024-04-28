import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';


const App = () => {
    return (
        <h1>Hello, React!</h1>
    );
};

createRoot(document.getElementById('root')).render(<App />);
