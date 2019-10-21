import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from "./Components/Game";
import Button from "./Components/Button";
import Navbar from "./Components/Navbar";
import { questionAnswer } from './redux/actions';
import { initQuestions } from './redux/actions';
import { changeQuestion } from './redux/actions';
import { submit } from './redux/actions';
import { timer } from './redux/actions';
import { reset } from './redux/actions';
import { fetching } from './redux/actions';


class App extends Component {

    componentDidMount(){
        this.props.dispatch(fetching(true));
        this.fetchQuestions();
        setInterval(()=>{
            this.props.dispatch(timer());
        },1000)
    }
 
    fetchQuestions(){
        fetch('https://quiz.dit.upm.es/api/quizzes/random10wa?token=638220fae031a10e5868').then((resp)=>
                resp.json()).then(json=> {
            this.props.dispatch(initQuestions(json));
            this.props.dispatch(fetching(false));
        }).catch(error => console.log(error));

    }
    endTimer(){
        this.props.dispatch(submit(this.props.questions));
    }

  render() {
      if (!this.props.finished) {
          if (this.props.fetching){
              return(
              <div>
                    <h1>Cargando las preguntas...</h1>
              </div>
              )
          }else{
              console.log(this.props.questions);
              return (
                  <div className="Timer">
                      <Navbar score={this.props.score}/>
                     
                        <h1>Tiempo restante: {this.props.timer === 0 ? this.endTimer() : this.props.timer} segundos </h1>
                          <h2>Question: {this.props.questionIndex}</h2><Game question={this.props.questions[this.props.currentQuestion]}
                            questionIndex={this.props.currentQuestion}
                            onQuestionAnswer={(answer) => {
                                this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                            }}
                            onChangeQuestion={(index) => {
                                this.props.dispatch(changeQuestion(index))
                            }}
                            onSubmit={() => {
                                this.props.dispatch(submit(this.props.questions))
                            }}
                            onInitQuestions={(questions) => {
                                this.props.dispatch(initQuestions(questions))
                            }}
                      />

                  </div>
              );
          }
      }else{
          return(
              <div className="Result">

                 <h1>Tu puntuación es de: {this.props.score} puntos </h1>
                    <h2> Tus respuestas: </h2>
                  {this.props.questions.map((question,index)=>{
                      return  <li key={index}><class className="Resume">{index+1}.- {question.question}: </class>
                                { question.userAnswer === undefined ? "Sin responder" : 
                                question.answer.toUpperCase() === question.userAnswer.toUpperCase() ? "ACIERTO" : "ERROR"}</li>
                  })}
                  <p><Button value='Volver a jugar' resetQuestions={() => {
                      this.props.dispatch(reset());
                      this.props.dispatch(fetching(true));
                      this.fetchQuestions();
                  }}/></p>
              </div>
          )
      }
  }
}

function mapStateToProps(state) {
  return { 
    ...state
  };
}

export default connect(mapStateToProps)(App);
