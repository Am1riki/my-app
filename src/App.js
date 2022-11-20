import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

const Games = () =>{
  return (
    <div>
      <tr>
        <td>Группа А</td>
        <td>Катар</td>
        <td>Эквадор</td>
      </tr>
    </div>
  );
}

const App = () =>{
  return(
  <div className='App'>
      <header className='Header'>
        <h1 className='logo'>Qatar 2022</h1>
      </header>
      <div className='Navigator'>
        <div><h1>FIFA</h1></div>
        <div><h1>Games</h1></div>
        <div><h1>Settings</h1></div>
      </div>
      <div className='Content'>
        <div><img className='pic' src = 'https://images7.alphacoders.com/122/1225577.jpg'></img></div>
      </div>
    </div>
      );
}

export default App;
