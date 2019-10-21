import React from 'react';

export default class Image extends React.Component {
    render() {
        return (
             <div className="Image">
                    <img src= {this.props.url} alt={this.props.url}
                   		 width={"35%"}
                    	 height={"35%"}
                     />
            </div>
        );
    }
}