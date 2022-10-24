import './App.css';
import Home from '../src/pages/home/Home'
import {Route} from 'react-router-dom'

export default function App() {
  return (
    <Route path='/' component={Home}></Route>
  );
}


