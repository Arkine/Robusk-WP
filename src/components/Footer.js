import React from 'react';

import Menu from '../containers/parts/menu';

export default class Footer extends React.Component {
    getYear() {
        const date = new Date();

        return date.getFullYear();
    }

    render() {
        return (
            <footer className="Footer">
                <Menu name="primary" className="Footer__menu"/>
                <span className="Footer__colophon"></span>
            </footer>
        );
    }
}
