import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../APICalls';
import QuestionTemplate from './QuestionTemplate';
import PropTypes from 'prop-types';

class QuestionsList extends Component {
    componentDidMount() {
        this.props.fetchQuestions();
    }

    render() {
        const { questions } = this.props;

        let questionsTemplate = Object.keys(questions).map( (key, index) => {
            return <QuestionTemplate
                key={key}
                title={questions[key].question}
                published_at={questions[key].published_at}
                choices={questions[key].choices.length}
                url={questions[key].url} />;
        });

        return (
            <div className="App">
                <div className="App-header ">
                    <h1>Questions</h1>
                </div>
                {this.props.isLoading && <div className="loading"><span></span></div> }
                <div className="container">
                    {questionsTemplate}
                </div>
            </div>
        );
    }
}

function mapStateToProps({ questions, questionsLoading }) {
    return { questions, isLoading: questionsLoading }
}

QuestionsList.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    questions: PropTypes.object.isRequired,
    fetchQuestions: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { fetchQuestions })(QuestionsList);