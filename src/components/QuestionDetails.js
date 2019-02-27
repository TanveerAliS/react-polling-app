import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleQuestion, postVote } from '../APICalls';
import PropTypes from 'prop-types';

class QuestionDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choice: {
        title: '',
        url: null
      }
    };
  }

  componentDidMount() {
    const {questionId} = this.props.match.params;
    this.props.fetchSingleQuestion(questionId, () => {
      console.log("success")
    });
  }

  handleChoiceOnClick = ({ choice, url }) =>{
    this.setState({
      choice: {
        title: choice,
        url: url
      }
    });
  }

  handleVoteSubmit = (event) => {
    event.preventDefault();
    this.props.postVote(this.state.choice.url, () => {
      this.props.history.push(`${this.props.match.url}/voted`);
    });
  }

  render() {
    const { question, choices } = this.props.selectedQuestion;
    const { title } = this.state.choice
    const choicesList = choices ? Object.keys(choices).map((key, index) => {
      return (
        <div key={key} className={`choices-list ${title === choices[key].choice ? ' active' : ''}`} onClick={(event) => {
          event.preventDefault();
          this.handleChoiceOnClick(choices[key]);
        }}>
          <span>{index + 1}.</span>
          <span>{choices[key].choice} </span>
          <span>Number of votes : {choices[key].votes}</span>
        </div>
      );
    }) : null;
    return (
      <div className="App">
        <div className="App-header ">
          <h1>Question Details</h1>
        </div>
        {this.props.isLoading && <div className="loading"><span></span></div>}
        <div className="wrapper">

          <div className="box question">{question}</div>
          <form className="box choices" onSubmit={this.handleVoteSubmit}>
            {choicesList}
            <button className="saveBtn" type="submit">Save vote</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ selectedQuestion, questionsLoading }) {
  return { selectedQuestion, isLoading: questionsLoading }
}

QuestionDetail.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  selectedQuestion: PropTypes.object.isRequired,
  fetchSingleQuestion: PropTypes.func.isRequired,
  postVote: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { fetchSingleQuestion, postVote })(QuestionDetail);