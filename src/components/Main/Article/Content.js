import React from 'react';

export default class Content extends React.Component {
    render() {
        return (<div className="card-text" dangerouslySetInnerHTML={ {__html: this.props.children} }/>);
    }
}
