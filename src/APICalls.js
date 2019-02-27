import axios from 'axios';
import { questionsLoading, fetchQuestionsSuccess, questionsHaveError, fetchSingleQuestionSuccess, updateVote } from '../src/actions/'

const ROOT_URL = 'https://polls.apiblueprint.org';

export const fetchQuestions = () => {
    let url = `${ROOT_URL}/questions`;
    let request = axios.get(url);
    return dispatch => {
        dispatch(questionsLoading(true));
        request.then(resp => {
            dispatch(fetchQuestionsSuccess(resp.data));
            dispatch(questionsLoading(false));
        }).catch(() => {
            dispatch(questionsHaveError(true));
        });
    }
}

export const fetchSingleQuestion = (id, callback)=> {
    let url = `${ROOT_URL}/questions/${id}`;
    let request = axios.get(url);

    return dispatch => {
        dispatch(questionsLoading(true));
        request.then(resp => {
            dispatch(fetchSingleQuestionSuccess(resp.data));
            dispatch(questionsLoading(false));
            callback();
        }).catch(() => {
            dispatch(questionsHaveError(true));
        });
    }
}

export const postVote = (choice, callback) => {
    console.log(choice)
    let request = axios.post(`${ROOT_URL}${choice}`).then(() => callback());
    return dispatch => dispatch(updateVote(request))
}