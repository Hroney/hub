import { Component } from 'react';
import Banner from './components/banner/banner'
import Main from './components/main/main';
import './App.css'

class App extends Component {



  render() {
    return (
      <div className='app-container'>
        <Banner />
        <Main />
      </div>
    );
  }
}

export default App;
