import React from 'react';
import Button from './Button';

export default class Actionbar extends React.Component {
    render() {
        return (
            <div className="ActionBar">
                <ul>
                <p>
                    <Button value={"Siguiente"} questionIndex = {this.props.questionIndex} 
                                onChangeQuestion={this.props.onChangeQuestion}/>
                </p>  
                
                 <p>
                    <Button value={"Terminar"} questions = {this.props.questions} 
                                onSubmit={this.props.onSubmit}/>
                </p>  

                <p>
                    <Button value={"Atras"} questionIndex = {this.props.questionIndex} 
                                onChangeQuestion={this.props.onChangeQuestion}/>
                </p>   
            </ul>
            </div>
        );
    }
}