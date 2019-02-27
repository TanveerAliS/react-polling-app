import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import QuestionsList from '../src/components/QuestionsList';
import QuestionDetails from '../src/components/QuestionDetails';
import VoteSuccess from  '../src/components/VoteSuccess';
import './App.scss';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
    <Route exact path="/" render={() => <Redirect to="/questions" />} />
    <Switch>
      <Route path="/questions/:questionId/voted" component={VoteSuccess} />
      <Route path="/questions/:questionId" component={QuestionDetails} />
      <Route path="/questions" component={QuestionsList} />
    </Switch>
    </React.Fragment>
  </BrowserRouter>
)

export default App;