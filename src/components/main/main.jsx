import { Component } from 'react';
import './main.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import Content_One from '../content/content_1/content_1'
import Content_Two from '../content/content_2/content_2'
import Home from '../content/home/home';

class Main extends Component {


    render() {
        return (
            <div className='app-main'>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/content_one' element={<Content_One />} />
                    <Route path='/content_two' element={<Content_Two />} />

                    {/* Redirects for base page and error page, should come back to create an error component */}
                    <Route path='/' element={<Navigate to='/home' replace />} />
                    <Route path='*' element={<div>404: Page Not Found</div>} />
                </Routes>
            </div>
        );
    }
}

export default Main;
