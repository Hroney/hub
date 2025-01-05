import { Component } from 'react';
import './main.css'
import { Route, Routes } from 'react-router-dom';
import Content_One from '../content/content_1/content_1'
import Home from '../content/home/home';

class Main extends Component {


    render() {
        return (
            <div className='app-main'>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/content_one' element={<Content_One />} />
                </Routes>
            </div>
        );
    }
}

export default Main;
