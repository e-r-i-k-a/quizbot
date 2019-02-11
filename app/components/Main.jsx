import React, { Component } from 'react';
import {connect} from 'react-redux';
import { questions } from '../../questions';
import Header from './Header';
import Question from './Question';
import Start from './Start';
import End from './End';

class Main extends Component {

  render() {
    const {increment, quiz: {currentPage, lastPage, yes}} = this.props;

    if (currentPage === 0) {
      //we have not started yet, so show the start page
      return (
        <main>
          <Start increment={increment}/>
        </main>
      )
    } else if (currentPage === lastPage) {
      //we have asked all the questions, so show the end page
      return (
        <main>
          <Header />
          <End yes={yes} total={questions.length}/>
        </main>
      )
    } else {
      const questionText = questions[currentPage - 1].q
      return (
        <main>
          <Header />
          <Question questionText={questionText} increment={increment} />
        </main>
      )
    }
  }
}

const mapStateToProps = (state, props) => {
  return {
    quiz: state.quiz
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (resp) => dispatch({ type: 'INCREMENT_QUESTION', payload: resp }),
    decrement: () => dispatch({ type: 'DECREMENT_QUESTION' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
