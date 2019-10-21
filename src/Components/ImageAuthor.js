import React from 'react';


export default class ImageAuthor extends React.Component {
    render() {
        return (
             <div className="Image2">
                    <img src= {this.props.url} alt={this.props.url} 
                         width={"25%"}
                    	 height={"25%"}
                    />
            </div>
        );
    }
}