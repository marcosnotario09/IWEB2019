import React from 'react';

export default class Author extends React.Component {
    render() {
        return (
            <div className="Author">
                <h3> Autor: {this.props.username}</h3>
            </div>
        );
    }
}