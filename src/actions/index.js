import { FETCH_QUESTIONS_SUCCESS, QUESTIONS_HAVE_ERROR, QUESTIONS_LOADING, FETCH_QUESTION, VOTE_ON_CHOICE } from './actionTypes';

export function fetchQuestionsSuccess(questions) {
    return { type: FETCH_QUESTIONS_SUCCESS, questions };
}

export function questionsHaveError(bool) {
    return { type: QUESTIONS_HAVE_ERROR, hasError: bool };
}

export function questionsLoading(bool) {
    return { type: QUESTIONS_LOADING, isLoading: bool };
}

export function updateVote(request) {
    return { type: VOTE_ON_CHOICE, payload: request };
}

export function fetchSingleQuestionSuccess(question) {
    return { type: FETCH_QUESTION, question };
}
