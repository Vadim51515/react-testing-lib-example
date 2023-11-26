// import logo from './logo.svg';
// import './App.css';
// import {
//     useEffect,
//     useState,
// } from 'react';
//
// function App() {
//     const [data, setData] = useState(null);
//     const [toggle, setToggle] = useState(false);
//     const [value, setValue] = useState('');
//
//     useEffect(() => {
//         setTimeout(() => {
//             setData({ name: 'Вадим' });
//         }, 100);
//     }, []);
//
//     const onClick = () => setToggle(prev => !prev);
//
//     return (
//         <div className='App'>
//             <h1>Hello World</h1>
//             <button  data-testid='toggle-btn' onClick={onClick}>Нажми на меня</button>
//             <input
//                 onChange={e => setValue(e.target.value)}
//                 type='text'
//                 data-testid='main-input'
//                 placeholder='в меня можно ввести текст'
//             />
//             {data?.name && <p>{data?.name}</p>}
//             {toggle && <p data-testid='toggle-elem'>Тогл сейчас в положении вкл</p>}
//             <p data-testid='value-input'>{value}</p>
//         </div>
//     );
// }
//
// export default App;

import React from 'react';
import AppRouter from './router/AppRouter';
import Navbar from './components/Navbar/Navbar';

const App = () => {
    return (
        <div>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;
