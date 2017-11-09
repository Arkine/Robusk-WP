import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '../containers/parts/menu';
import Search from './search';

export default class Header extends React.Component {
    render() {
        return (
            <header className="HeaderNav">
                <h1 className="HeaderNav__branding"><Link to='/'>{RT_API.siteName}</Link></h1>
                <nav className="HeaderNav__nav" data-sticky>
                    <Menu className="primary" />
                    <Search
                        searchTerm={ this.props.searchTerm }
                        isSearch={ this.props.isSearch } />
                </nav>
            </header>
        );
    }
}
