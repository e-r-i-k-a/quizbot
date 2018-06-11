import React, { Component } from 'react';
import { questionArr } from '../../questionArr.js'
import Header from './Header'
import Question from './Question'
import Start from './Start'
import End from './End'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0,
      yes: 0,
      no: 0
    }
    this.advance = this.advance.bind(this);
  }

  advance(answer) {
    if (this.state.slide <= questionArr.length) {
      const nextSlide = this.state.slide + 1
      if (answer === 'y') {
        this.setState({ slide: nextSlide,
        yes: this.state.yes + 1 })
      }
      if (answer === 'n') {
        this.setState({ slide: nextSlide,
        no: this.state.no + 1 })
      } else {
        this.setState({ slide: nextSlide})
      }
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
          <Header />
          <End yes={this.state.yes} no={this.state.no}/>
        </main>
      )
    } else {
      //show the question that we're on
      const questionText = questionArr[this.state.slide - 1].question
      return (
        <main>
          <Header />
          <Question questionText={questionText} advance={this.advance} />
        </main>
      )
    }
  }
}
