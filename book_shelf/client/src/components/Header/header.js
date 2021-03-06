import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

import { Link } from 'react-router-dom'
import Nav from './Sidenav/sidenav';

export class Header extends Component {
    state = {
        showNav: false
    }
    onHideNav = () => {
        this.setState({
            showNav: false
        })
    }

    render() {
        return (
            <header>
                <div className="open_nav">
                    <FontAwesome name="bars"
                        style={{
                            color: '#ffffff',
                            padding: '10px',
                            cursor: 'pointer'
                        }}
                        onClick={() => this.setState({ showNav: true })}
                    />
                    <Nav
                        showNav={this.state.showNav}
                        onHideNav={() => this.showNav}
                    >
                    </Nav>
                    <Link to="/" className="logo">
                        The Book Shelf
                    </Link>
                </div>


            </header>
        )
    }
}

export default Header
