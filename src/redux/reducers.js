import { combineReducers } from 'redux';
import { QUESTION_ANSWER } from "./actions";
import { INIT_QUESTIONS } from "./actions";
import { CHANGE_QUESTION } from "./actions";
import { SUBMIT } from "./actions";
import { TIMER} from "./actions";
import { RESET } from "./actions";
import { FETCHING } from "./actions";


function score(state = 0, action = {}) {
    let score ;
    switch(action.type) {
        case SUBMIT:
            score = state;
            action.payload.questions.map((questions)=> {
                if (!(questions.userAnswer === undefined)){
                    if (questions.answer.toUpperCase() === questions.userAnswer.toUpperCase()){
                       score  = score +1;
                    }
                    }
            });
                return score ;
        case RESET:
            return 0;
        case INIT_QUESTIONS:
            return 0;
        default:
            return state;
    }
}

function finished(state = false, action = {}) {
    switch(action.type) {
        case SUBMIT:
            return true;
        case INIT_QUESTIONS:
            return false;
        case TIMER:
            if(action.payload.time ===0){
                return true;
            }
            return state;
        default:
            return state;
    }
}

function currentQuestion(state = 0, action = {}) {
    
    switch(action.type) {
        case CHANGE_QUESTION:
            if (action.payload.index < 10 && action.payload.index > -1) {
               state = action.payload.index;
               return state;
           }else{
              return state;
           }
        case INIT_QUESTIONS:
            return 0;
        default:
            return state;
    }
}

function questions(state = [], action = {}) {
    switch(action.type) {
        case QUESTION_ANSWER:
            return state.map((question,i) =>  {
                return { ...question,
                            userAnswer: action.payload.index === i ?
                                        action.payload.answer : question.userAnswer}
            });
        case INIT_QUESTIONS:
            return action.payload.questions;
        default:
            return state;
    }
}
function fetching(state = false, action={}){
    switch(action.type) {
        case FETCHING:
            return action.payload.status;
        default:
            return state;
    }
}
function timer(state = 120, action={}) {
    switch(action.type) {
    case SUBMIT:
        return 0;
    case TIMER:
        return state - 1;
     case INIT_QUESTIONS:
        return 120;
    default:
        return state;
    }

}
const GlobalState = (combineReducers({
    score,
    finished,
    currentQuestion,
    questions,
    fetching,
    timer
}));

export default GlobalState;