import React from 'react';

export default class Answer extends React.Component {
    render() {
        return (
            <div className="Answer">
                <input type="text" placeholder= 'Introduce la respuesta' value={this.props.question.userAnswer || ''}
                       onChange={(e)=>{ this.props.onQuestionAnswer(e.target.value);}}/>
            </div>
        );
    }
}