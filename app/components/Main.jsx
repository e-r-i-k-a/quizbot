import React, { Component } from 'react';
import { questionArr } from '../../questionArr.js'
import Question from './Question'
import Start from './Start'
import End from './End'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0,
    }
    this.advance = this.advance.bind(this);
  }

  advance() {
    if (this.state.slide <= questionArr.length) {
      this.setState({ slide: this.state.slide + 1 })
    }
  }

  render() {
    if (!this.state.slide) {
      //we have not started yet, so show the landing page
      return (
        <main>
          <Start advance={this.advance} />
        </main>
      )
    } else if (this.state.slide === questionArr.length + 1) {
      //we have asked all the questions, so show the ending page
      return (
        <main>
          <End />
        </main>
      )
    } else {
      //show the question that we're on
      const questionText = questionArr[this.state.slide - 1].question
      return (
        <main>
          <Question questionText={questionText} advance={this.advance} />
        </main>
      )
    }
  }
}
