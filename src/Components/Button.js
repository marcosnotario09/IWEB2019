import React from 'react';

export default class Button extends React.Component {

    render() {
        return (
            <div className="Button">
                <button type="button" onClick={()=>{
                    switch (this.props.value) {
                        case'Atras':
                            return this.props.onChangeQuestion(this.props.questionIndex - 1);
                        case'Terminar':
                            return this.props.onSubmit();
                        case'Siguiente':
                            return this.props.onChangeQuestion(this.props.questionIndex + 1);
                        case 'Volver a jugar':
                            return this.props.resetQuestions();
                        default:
                            return 0;
                    }
                }}>{this.props.value || ''} </button>
            </div>
        );
    }
}