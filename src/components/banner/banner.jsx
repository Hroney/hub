import { Component } from 'react';
import { Link } from 'react-router-dom';
import './banner.css'

class Banner extends Component {
    state = { isMenuOpen: false }

    toggleMenu = () => {
        this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }))
    }

    closeMenu = () => {
        this.setState({ isMenuOpen: false })
    }

    resetMenuState = () => {
        if (window.innerWidth > 768) {
            this.setState({ isMenuOpen: false });
        }
    };

    componentDidMount() {
        this.resetMenuState();
        window.addEventListener('resize', this.resetMenuState);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resetMenuState);
    }

    render() {
        return (
            <>
                <div className='app-banner'>
                    <div className='app-banner-name'>
                        <span className='app-banner-name-span'>
                            Hayden Roney
                        </span>
                    </div>
                    <button
                        className='menu-toggle'
                        onClick={this.toggleMenu}
                    >
                        <span className='menu-toggle-span'>
                            ☰
                        </span>
                    </button>
                    <div
                        className={`app-banner-links ${this.state.isMenuOpen ? 'open' : ''}`}
                    >
                        <Link to="/home" className='app-banner-content' onClick={this.closeMenu}>home</Link>
                        <Link to="/content_one" className='app-banner-content' onClick={this.closeMenu}>content</Link>
                        <Link to="/content_two" className='app-banner-content' onClick={this.closeMenu}>content 2</Link>
                        <Link to="/content_two" className='app-banner-content' onClick={this.closeMenu}>content 2</Link>
                        <Link to="/content_two" className='app-banner-content' onClick={this.closeMenu}>content 2</Link>
                        {this.state.isMenuOpen ? <hr /> : null}
                    </div>
                </div>
                <hr />
            </>
        );
    }
}

export default Banner;
