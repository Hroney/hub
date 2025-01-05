import { Component } from 'react';
import { Link } from 'react-router-dom';
import './banner.css'

class Banner extends Component {


    render() {
        return (
            <>
                <div className='app-banner'>
                    <div className='app-banner-name'>Hayden Roney</div>
                    <Link to="/home" className='app-banner-content'>home</Link>
                    <Link to="/content_one" className='app-banner-content'>content</Link>
                    <div className='app-banner-content'>content</div>
                </div>
                <hr />
            </>
        );
    }
}

export default Banner;
